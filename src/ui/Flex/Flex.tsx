import React, { ReactNode, CSSProperties, ElementType } from 'react';
import styled from 'styled-components';

interface FlexProps {
  // Флексбокс свойства
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  
  // Свойства элемента флекса
  grow?: string | number;
  shrink?: string | number;
  basis?: string;
  order?: string | number;
  self?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  
  // Размеры
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  
  // Отступы и границы
  padding?: string;
  margin?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  
  // Прочие свойства
  overflow?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: string | number;
  
  // Для дополнительных стилей
  css?: string;
  
  // Для компонентов React
  children?: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  
  // Для остальных HTML атрибутов
  [x: string]: any;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  align-content: ${props => props.alignContent || 'stretch'};
  gap: ${props => props.gap || '0'};
  row-gap: ${props => props.rowGap || props.gap || '0'};
  column-gap: ${props => props.columnGap || props.gap || '0'};
  flex-grow: ${props => props.grow || '0'};
  flex-shrink: ${props => props.shrink || '1'};
  flex-basis: ${props => props.basis || 'auto'};
  order: ${props => props.order || '0'};
  align-self: ${props => props.self || 'auto'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  min-width: ${props => props.minWidth || 'auto'};
  min-height: ${props => props.minHeight || 'auto'};
  max-width: ${props => props.maxWidth || 'none'};
  max-height: ${props => props.maxHeight || 'none'};
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  background: ${props => props.background || 'transparent'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '0'};
  box-shadow: ${props => props.boxShadow || 'none'};
  overflow: ${props => props.overflow || 'visible'};
  position: ${props => props.position || 'static'};
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  z-index: ${props => props.zIndex || 'auto'};
  ${props => props.css || ''}
`;

const Flex = ({ children, ...rest }: FlexProps) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;