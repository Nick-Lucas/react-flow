import type { CSSProperties, HTMLAttributes, MouseEvent as ReactMouseEvent, WheelEvent } from 'react';

import type {
  OnSelectionChangeFunc,
  NodeTypes,
  EdgeTypes,
  Node,
  Edge,
  ConnectionMode,
  ConnectionLineType,
  ConnectionLineComponent,
  OnConnectStart,
  OnConnectEnd,
  OnConnect,
  CoordinateExtent,
  KeyCode,
  PanOnScrollMode,
  OnEdgeUpdateFunc,
  OnInit,
  ProOptions,
  PanelPosition,
  DefaultEdgeOptions,
  FitViewOptions,
  OnNodesDelete,
  OnEdgesDelete,
  OnNodesChange,
  OnEdgesChange,
  OnMove,
  OnMoveStart,
  OnMoveEnd,
  NodeDragHandler,
  NodeMouseHandler,
  SelectionDragHandler,
  Viewport,
  NodeOrigin,
  EdgeMouseHandler,
  HandleType,
  SelectionMode,
  OnError,
} from '.';
import { ValidConnectionFunc } from '../components/Handle/utils';

export type ReactFlowProps = Omit<HTMLAttributes<HTMLDivElement>, 'onError'> & {
  nodes?: Node[];
  edges?: Edge[];
  defaultNodes?: Node[];
  defaultEdges?: Edge[];
  defaultEdgeOptions?: DefaultEdgeOptions;
  onNodeClick?: NodeMouseHandler;
  onNodeDoubleClick?: NodeMouseHandler;
  onNodeMouseEnter?: NodeMouseHandler;
  onNodeMouseMove?: NodeMouseHandler;
  onNodeMouseLeave?: NodeMouseHandler;
  onNodeContextMenu?: NodeMouseHandler;
  onNodeDragStart?: NodeDragHandler;
  onNodeDrag?: NodeDragHandler;
  onNodeDragStop?: NodeDragHandler;
  onEdgeClick?: (event: ReactMouseEvent, node: Edge) => void;
  onEdgeUpdate?: OnEdgeUpdateFunc;
  onEdgeContextMenu?: EdgeMouseHandler;
  onEdgeMouseEnter?: EdgeMouseHandler;
  onEdgeMouseMove?: EdgeMouseHandler;
  onEdgeMouseLeave?: EdgeMouseHandler;
  onEdgeDoubleClick?: EdgeMouseHandler;
  onEdgeUpdateStart?: (event: ReactMouseEvent, edge: Edge, handleType: HandleType) => void;
  onEdgeUpdateEnd?: (event: MouseEvent | TouchEvent, edge: Edge, handleType: HandleType) => void;
  onNodesChange?: OnNodesChange;
  onEdgesChange?: OnEdgesChange;
  onNodesDelete?: OnNodesDelete;
  onEdgesDelete?: OnEdgesDelete;
  onSelectionDragStart?: SelectionDragHandler;
  onSelectionDrag?: SelectionDragHandler;
  onSelectionDragStop?: SelectionDragHandler;
  onSelectionStart?: (event: ReactMouseEvent) => void;
  onSelectionEnd?: (event: ReactMouseEvent) => void;
  onSelectionContextMenu?: (event: ReactMouseEvent, nodes: Node[]) => void;
  onConnect?: OnConnect;
  onConnectStart?: OnConnectStart;
  onConnectEnd?: OnConnectEnd;
  onClickConnectStart?: OnConnectStart;
  onClickConnectEnd?: OnConnectEnd;
  onInit?: OnInit;
  onMove?: OnMove;
  onMoveStart?: OnMoveStart;
  onMoveEnd?: OnMoveEnd;
  onSelectionChange?: OnSelectionChangeFunc;
  onPaneScroll?: (event?: WheelEvent) => void;
  onPaneClick?: (event: ReactMouseEvent) => void;
  onPaneContextMenu?: (event: ReactMouseEvent) => void;
  onPaneMouseEnter?: (event: ReactMouseEvent) => void;
  onPaneMouseMove?: (event: ReactMouseEvent) => void;
  onPaneMouseLeave?: (event: ReactMouseEvent) => void;
  nodeTypes?: NodeTypes;
  edgeTypes?: EdgeTypes;
  connectionLineType?: ConnectionLineType;
  connectionLineStyle?: CSSProperties;
  connectionLineComponent?: ConnectionLineComponent;
  connectionLineContainerStyle?: CSSProperties;
  connectionMode?: ConnectionMode;
  deleteKeyCode?: KeyCode | null;
  selectionKeyCode?: KeyCode | null;
  selectionOnDrag?: boolean;
  selectionMode?: SelectionMode;
  panActivationKeyCode?: KeyCode | null;
  multiSelectionKeyCode?: KeyCode | null;
  zoomActivationKeyCode?: KeyCode | null;
  snapToGrid?: boolean;
  snapGrid?: [number, number];
  onlyRenderVisibleElements?: boolean;
  nodesDraggable?: boolean;
  nodesConnectable?: boolean;
  nodesFocusable?: boolean;
  nodeOrigin?: NodeOrigin;
  edgesFocusable?: boolean;
  edgesUpdatable?: boolean;
  initNodeOrigin?: NodeOrigin;
  elementsSelectable?: boolean;
  selectNodesOnDrag?: boolean;
  panOnDrag?: boolean | number[];
  minZoom?: number;
  maxZoom?: number;
  defaultViewport?: Viewport;
  translateExtent?: CoordinateExtent;
  preventScrolling?: boolean;
  nodeExtent?: CoordinateExtent;
  defaultMarkerColor?: string;
  zoomOnScroll?: boolean;
  zoomOnPinch?: boolean;
  panOnScroll?: boolean;
  panOnScrollSpeed?: number;
  panOnScrollMode?: PanOnScrollMode;
  zoomOnDoubleClick?: boolean;
  edgeUpdaterRadius?: number;
  noDragClassName?: string;
  noWheelClassName?: string;
  noPanClassName?: string;
  fitView?: boolean;
  fitViewOptions?: FitViewOptions;
  connectOnClick?: boolean;
  attributionPosition?: PanelPosition;
  proOptions?: ProOptions;
  elevateNodesOnSelect?: boolean;
  elevateEdgesOnSelect?: boolean;
  disableKeyboardA11y?: boolean;
  autoPanOnNodeDrag?: boolean;
  autoPanOnConnect?: boolean;
  connectionRadius?: number;
  onError?: OnError;
  isValidConnection?: ValidConnectionFunc;
  nodeDragThreshold?: number;
};

export type ReactFlowRefType = HTMLDivElement;
