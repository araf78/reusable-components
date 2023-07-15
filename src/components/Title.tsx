
import React from 'react';

interface TitleProps {
  header: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
}

const Title: React.FC<TitleProps> = ({ header, size, color, backgroundColor }) => (
  <h1 style={{ fontSize: size, backgroundColor, color }}>{header}</h1>
);

export default Title;

