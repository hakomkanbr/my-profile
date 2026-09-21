import React from 'react';
import {
  Home,
  Compass,
  Layers,
  Briefcase,
  Sparkles,
  TrendingUp,
  Bookmark,
  Award,
  UserCheck,
  User,
  Mail,
  BookOpen,
  CheckCircle2,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sun,
  Moon,
  Monitor,
  Globe,
  Presentation,
  GraduationCap,
  MonitorPlay,
  Maximize2,
  Minimize2,
  FileText,
  FolderGit2,
  LogOut,
} from 'lucide-react';

interface IconMapperProps {
  name: string;
  className?: string;
}

export const IconMapper: React.FC<IconMapperProps> = ({ name, className = 'w-4 h-4' }) => {
  switch (name) {
    case 'Home':
      return <Home className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Bookmark':
      return <Bookmark className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'User':
      return <User className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'Presentation':
      return <Presentation className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'FolderGit2':
      return <FolderGit2 className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};

export {
  CheckCircle2,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Sun,
  Moon,
  Monitor,
  Globe,
  Presentation,
  GraduationCap,
  Sparkles,
  MonitorPlay,
  Maximize2,
  Minimize2,
  FileText,
  FolderGit2,
  LogOut,
};

