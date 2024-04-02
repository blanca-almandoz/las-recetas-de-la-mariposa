import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export interface TopLevelWrapper {
    children: ReactNode;
}

export interface Card {
    id: string,
    title: string,
    time: string,
    image: string,
    difficulty: string,
    category: string
}

export interface Icon {
    icon: string
    level?: string
}

export interface IconAndLabel extends Icon {
    label: any,
    level?: string
}

export interface ListedItems extends Icon {
    title: string,
    items: Array<string>
    level?: string
}

export interface DetailsPage {
    recipe: any
}

export interface Tag {
    text: string
}