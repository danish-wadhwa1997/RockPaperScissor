import React from "react";
export declare interface Choice {
  image: string;
  label: string;
}

export declare interface PropsChildren {
  children: React.ReactNode;
}

export declare interface RulesObj {
  [key: string]: string[];
}

export declare interface SelectOption {
  label: string;
  value: string;
}

export declare interface Result {
  player1: number;
  tie: number;
  player2: number;
}
