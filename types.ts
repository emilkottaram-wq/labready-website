import { ElementType, ReactNode } from 'react';

export interface FeatureType {
  title: string;
  description: string;
  bullets: string[];
  icon: ElementType;
  image: string;
}

export interface PainPointType {
  title: string;
  description: string;
  icon: ElementType;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}