type SlideKind =
    | 'Start'
    | 'Header'
    | 'ItemList'
    | 'HalfImage'
    | 'Generic';

type VerticalAlignment = 'top' | 'bottom' | 'center';
type HorizontalAlignment = 'left' | 'right' | 'center';

type TextPosition =
    | `${VerticalAlignment}-${HorizontalAlignment}`;