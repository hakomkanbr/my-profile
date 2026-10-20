/**
 * Automated Verification Script: Privacy, Permissions & Portfolio Governance
 * Verifies all acceptance criteria for Abdulhakim Kanbr's portfolio showcase.
 */

import {
  MASTER_PROJECTS_REGISTRY,
  getPublishedProjects,
  getPublishedProjectsWithCaseStudy,
  getPortfolioProjectBySlug,
  PORTFOLIO_CATEGORIES,
} from '../src/content/portfolio-projects';

let failures = 0;

function assert(condition: boolean, message: string) {
  if (condition) {
    console.log(`[PASS] ${message}`);
  } else {
    console.error(`[FAIL] ${message}`);
    failures++;
  }
}

console.log('====================================================');
console.log('RUNNING ACCEPTANCE VERIFICATION TESTS');
console.log('====================================================\n');

// 1. Verify Master Registry contains all 10 target projects
const saasIds = ['saas-share2sells', 'saas-masar', 'saas-cashpro'];
const clientIds = [
  'client-hayrukum',
  'client-umutnesli',
  'client-safanur-ecommerce',
  'client-safanur-invoices',
  'client-insan-orphans',
  'client-sba-invoices',
  'client-camel-club',
];

console.log('--- TEST GROUP 1: Master Registry Population ---');
saasIds.forEach((id) => {
  const p = MASTER_PROJECTS_REGISTRY.find((item) => item.id === id);
  assert(Boolean(p), `SaaS product '${id}' registered in MASTER_PROJECTS_REGISTRY`);
  if (p) {
    assert(p.reviewStatus === 'approved', `${id} reviewStatus is 'approved'`);
    assert(p.visibility === 'public', `${id} visibility is 'public'`);
    assert(Boolean(p.liveUrl), `${id} has public liveUrl`);
    assert(p.verifiedUrl === true, `${id} verifiedUrl is true`);
  }
});

clientIds.forEach((id) => {
  const p = MASTER_PROJECTS_REGISTRY.find((item) => item.id === id);
  assert(Boolean(p), `Client project '${id}' registered in MASTER_PROJECTS_REGISTRY`);
  if (p) {
    assert(p.reviewStatus === 'pending', `${id} reviewStatus is 'pending' (Default Hidden Rule)`);
    assert(p.visibility === 'hidden', `${id} visibility is 'hidden' (Strict Privacy)`);
    assert(p.permissions.clientName === false, `${id} clientName permission is false`);
    assert(p.permissions.projectUrl === false, `${id} projectUrl permission is false`);
    assert(p.permissions.screenshots === false, `${id} screenshots permission is false`);
    assert(p.permissions.caseStudy === false, `${id} caseStudy permission is false`);
    assert(
      Array.isArray(p.missingInformationForPublication) &&
        p.missingInformationForPublication.length > 0,
      `${id} has documented missingInformationForPublication checklist`
    );
  }
});

// 2. Test Zero Data Leakage in Public Accessors
console.log('\n--- TEST GROUP 2: Zero Data Leakage in Public Accessors ---');
const publishedProjects = getPublishedProjects();

clientIds.forEach((id) => {
  const leaked = publishedProjects.find((p) => p.id === id);
  assert(!leaked, `Zero-leakage: Hidden client project '${id}' is NOT in getPublishedProjects()`);
});

publishedProjects.forEach((p) => {
  assert(
    p.visibility !== 'hidden',
    `Published project '${p.slug}' visibility is not hidden (${p.visibility})`
  );
  assert(
    p.reviewStatus === 'approved',
    `Published project '${p.slug}' reviewStatus is 'approved'`
  );
  assert(
    p.internalName === undefined,
    `Published project '${p.slug}' internalName is stripped/sanitized`
  );
  assert(
    p.internalNotes === undefined,
    `Published project '${p.slug}' internalNotes is stripped/sanitized`
  );
  assert(
    p.missingInformationForPublication === undefined,
    `Published project '${p.slug}' missingInformationForPublication is stripped/sanitized`
  );
});

// 3. Test Detail Page Routing and getPortfolioProjectBySlug
console.log('\n--- TEST GROUP 3: Slug Lookup and Detail Page Boundary ---');
clientIds.forEach((id) => {
  const masterItem = MASTER_PROJECTS_REGISTRY.find((item) => item.id === id);
  if (masterItem) {
    const lookup = getPortfolioProjectBySlug(masterItem.slug);
    assert(
      lookup === undefined,
      `Slug lookup for hidden project '${masterItem.slug}' returns undefined (preventing dynamic routes)`
    );
  }
});

saasIds.forEach((id) => {
  const masterItem = MASTER_PROJECTS_REGISTRY.find((item) => item.id === id);
  if (masterItem) {
    const lookup = getPortfolioProjectBySlug(masterItem.slug);
    assert(
      Boolean(lookup),
      `Slug lookup for approved project '${masterItem.slug}' succeeds`
    );
  }
});

// 4. Test Case Study Generation Boundary
console.log('\n--- TEST GROUP 4: Case Study Page Boundaries ---');
const caseStudyProjects = getPublishedProjectsWithCaseStudy();
caseStudyProjects.forEach((p) => {
  assert(
    p.hasCaseStudy === true,
    `Project '${p.slug}' in getPublishedProjectsWithCaseStudy() hasCaseStudy === true`
  );
  assert(
    p.visibility !== 'hidden',
    `Project '${p.slug}' in getPublishedProjectsWithCaseStudy() is not hidden`
  );
});

// 5. Test Categories Definition
console.log('\n--- TEST GROUP 5: Category Filters ---');
const expectedCategories = ['all', 'saas', 'client', 'anonymized-case-study'];
expectedCategories.forEach((catKey) => {
  const cat = PORTFOLIO_CATEGORIES.find((c) => c.key === catKey);
  assert(Boolean(cat), `Required filter category '${catKey}' exists in PORTFOLIO_CATEGORIES`);
  if (cat) {
    assert(Boolean(cat.label.ar), `Category '${catKey}' has Arabic label: ${cat.label.ar}`);
    assert(Boolean(cat.label.en), `Category '${catKey}' has English label: ${cat.label.en}`);
  }
});

console.log('\n====================================================');
if (failures === 0) {
  console.log('ALL VERIFICATION TESTS PASSED SUCCESSFULLY! (0 failures)');
  console.log('====================================================');
  process.exit(0);
} else {
  console.error(`VERIFICATION FAILED: ${failures} test(s) failed.`);
  console.log('====================================================');
  process.exit(1);
}
