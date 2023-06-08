"use strict";(self.webpackChunk_metro_docs=self.webpackChunk_metro_docs||[]).push([[574],{24432:function(q,F,v){v.d(F,{Z:function(){return i}});var w=v(7896),m=v(56666),G=v(99980),z=v(33028),V=v(9249),X=v(87371),S=v(80753),E=v(64136),y=v(33219),f=v(41398),N=v(72779),C=v.n(N),K=v(68330),B=v(112),I=function(h){for(var p=h.prefixCls,e=h.level,s=h.isStart,l=h.isEnd,k="".concat(p,"-indent-unit"),r=[],t=0;t<e;t+=1){var c;r.push(f.createElement("span",{key:t,className:C()(k,(c={},(0,m.Z)(c,"".concat(k,"-start"),s[t]),(0,m.Z)(c,"".concat(k,"-end"),l[t]),c))}))}return f.createElement("span",{"aria-hidden":"true",className:"".concat(p,"-indent")},r)},A=f.memo(I),P=v(73855),M=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],b="open",O="close",n="---",a=function(u){(0,E.Z)(p,u);var h=(0,y.Z)(p);function p(){var e;(0,V.Z)(this,p);for(var s=arguments.length,l=new Array(s),k=0;k<s;k++)l[k]=arguments[k];return e=h.call.apply(h,[this].concat(l)),e.state={dragNodeHighlight:!1},e.selectHandle=void 0,e.onSelectorClick=function(r){var t=e.props.context.onNodeClick;t(r,(0,P.F)(e.props)),e.isSelectable()?e.onSelect(r):e.onCheck(r)},e.onSelectorDoubleClick=function(r){var t=e.props.context.onNodeDoubleClick;t(r,(0,P.F)(e.props))},e.onSelect=function(r){if(!e.isDisabled()){var t=e.props.context.onNodeSelect;r.preventDefault(),t(r,(0,P.F)(e.props))}},e.onCheck=function(r){if(!e.isDisabled()){var t=e.props,c=t.disableCheckbox,d=t.checked,g=e.props.context.onNodeCheck;if(!(!e.isCheckable()||c)){r.preventDefault();var D=!d;g(r,(0,P.F)(e.props),D)}}},e.onMouseEnter=function(r){var t=e.props.context.onNodeMouseEnter;t(r,(0,P.F)(e.props))},e.onMouseLeave=function(r){var t=e.props.context.onNodeMouseLeave;t(r,(0,P.F)(e.props))},e.onContextMenu=function(r){var t=e.props.context.onNodeContextMenu;t(r,(0,P.F)(e.props))},e.onDragStart=function(r){var t=e.props.context.onNodeDragStart;r.stopPropagation(),e.setState({dragNodeHighlight:!0}),t(r,(0,S.Z)(e));try{r.dataTransfer.setData("text/plain","")}catch(c){}},e.onDragEnter=function(r){var t=e.props.context.onNodeDragEnter;r.preventDefault(),r.stopPropagation(),t(r,(0,S.Z)(e))},e.onDragOver=function(r){var t=e.props.context.onNodeDragOver;r.preventDefault(),r.stopPropagation(),t(r,(0,S.Z)(e))},e.onDragLeave=function(r){var t=e.props.context.onNodeDragLeave;r.stopPropagation(),t(r,(0,S.Z)(e))},e.onDragEnd=function(r){var t=e.props.context.onNodeDragEnd;r.stopPropagation(),e.setState({dragNodeHighlight:!1}),t(r,(0,S.Z)(e))},e.onDrop=function(r){var t=e.props.context.onNodeDrop;r.preventDefault(),r.stopPropagation(),e.setState({dragNodeHighlight:!1}),t(r,(0,S.Z)(e))},e.onExpand=function(r){var t=e.props,c=t.loading,d=t.context.onNodeExpand;c||d(r,(0,P.F)(e.props))},e.setSelectHandle=function(r){e.selectHandle=r},e.getNodeState=function(){var r=e.props.expanded;return e.isLeaf()?null:r?b:O},e.hasChildren=function(){var r=e.props.eventKey,t=e.props.context.keyEntities,c=t[r]||{},d=c.children;return!!(d||[]).length},e.isLeaf=function(){var r=e.props,t=r.isLeaf,c=r.loaded,d=e.props.context.loadData,g=e.hasChildren();return t===!1?!1:t||!d&&!g||d&&c&&!g},e.isDisabled=function(){var r=e.props.disabled,t=e.props.context.disabled;return!!(t||r)},e.isCheckable=function(){var r=e.props.checkable,t=e.props.context.checkable;return!t||r===!1?!1:t},e.syncLoadData=function(r){var t=r.expanded,c=r.loading,d=r.loaded,g=e.props.context,D=g.loadData,Z=g.onNodeLoad;c||D&&t&&!e.isLeaf()&&!e.hasChildren()&&!d&&Z((0,P.F)(e.props))},e.isDraggable=function(){var r=e.props,t=r.data,c=r.context.draggable;return!!(c&&(!c.nodeDraggable||c.nodeDraggable(t)))},e.renderDragHandler=function(){var r=e.props.context,t=r.draggable,c=r.prefixCls;return t!=null&&t.icon?f.createElement("span",{className:"".concat(c,"-draggable-icon")},t.icon):null},e.renderSwitcherIconDom=function(r){var t=e.props.switcherIcon,c=e.props.context.switcherIcon,d=t||c;return typeof d=="function"?d((0,z.Z)((0,z.Z)({},e.props),{},{isLeaf:r})):d},e.renderSwitcher=function(){var r=e.props.expanded,t=e.props.context.prefixCls;if(e.isLeaf()){var c=e.renderSwitcherIconDom(!0);return c!==!1?f.createElement("span",{className:C()("".concat(t,"-switcher"),"".concat(t,"-switcher-noop"))},c):null}var d=C()("".concat(t,"-switcher"),"".concat(t,"-switcher_").concat(r?b:O)),g=e.renderSwitcherIconDom(!1);return g!==!1?f.createElement("span",{onClick:e.onExpand,className:d},g):null},e.renderCheckbox=function(){var r=e.props,t=r.checked,c=r.halfChecked,d=r.disableCheckbox,g=e.props.context.prefixCls,D=e.isDisabled(),Z=e.isCheckable();if(!Z)return null;var x=typeof Z!="boolean"?Z:null;return f.createElement("span",{className:C()("".concat(g,"-checkbox"),t&&"".concat(g,"-checkbox-checked"),!t&&c&&"".concat(g,"-checkbox-indeterminate"),(D||d)&&"".concat(g,"-checkbox-disabled")),onClick:e.onCheck},x)},e.renderIcon=function(){var r=e.props.loading,t=e.props.context.prefixCls;return f.createElement("span",{className:C()("".concat(t,"-iconEle"),"".concat(t,"-icon__").concat(e.getNodeState()||"docu"),r&&"".concat(t,"-icon_loading"))})},e.renderSelector=function(){var r=e.state.dragNodeHighlight,t=e.props,c=t.title,d=c===void 0?n:c,g=t.selected,D=t.icon,Z=t.loading,x=t.data,T=e.props.context,$=T.prefixCls,L=T.showIcon,Y=T.icon,J=T.loadData,_=T.titleRender,j=e.isDisabled(),ee="".concat($,"-node-content-wrapper"),Q;if(L){var W=D||Y;Q=W?f.createElement("span",{className:C()("".concat($,"-iconEle"),"".concat($,"-icon__customize"))},typeof W=="function"?W(e.props):W):e.renderIcon()}else J&&Z&&(Q=e.renderIcon());var U;typeof d=="function"?U=d(x):_?U=_(x):U=d;var R=f.createElement("span",{className:"".concat($,"-title")},U);return f.createElement("span",{ref:e.setSelectHandle,title:typeof d=="string"?d:"",className:C()("".concat(ee),"".concat(ee,"-").concat(e.getNodeState()||"normal"),!j&&(g||r)&&"".concat($,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick},Q,R,e.renderDropIndicator())},e.renderDropIndicator=function(){var r=e.props,t=r.disabled,c=r.eventKey,d=e.props.context,g=d.draggable,D=d.dropLevelOffset,Z=d.dropPosition,x=d.prefixCls,T=d.indent,$=d.dropIndicatorRender,L=d.dragOverNodeKey,Y=d.direction,J=!!g,_=!t&&J&&L===c;return _?$({dropPosition:Z,dropLevelOffset:D,indent:T,prefixCls:x,direction:Y}):null},e}return(0,X.Z)(p,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var s=this.props.selectable,l=this.props.context.selectable;return typeof s=="boolean"?s:l}},{key:"render",value:function(){var s,l=this.props,k=l.eventKey,r=l.className,t=l.style,c=l.dragOver,d=l.dragOverGapTop,g=l.dragOverGapBottom,D=l.isLeaf,Z=l.isStart,x=l.isEnd,T=l.expanded,$=l.selected,L=l.checked,Y=l.halfChecked,J=l.loading,_=l.domRef,j=l.active,ee=l.data,Q=l.onMouseMove,W=l.selectable,U=(0,G.Z)(l,M),R=this.props.context,H=R.prefixCls,te=R.filterTreeNode,ie=R.keyEntities,de=R.dropContainerKey,ce=R.dropTargetKey,se=R.draggingNodeKey,re=this.isDisabled(),le=(0,K.Z)(U,{aria:!0,data:!0}),ue=ie[k]||{},fe=ue.level,pe=x[x.length-1],ne=this.isDraggable(),ae=!re&&ne,oe=se===k,ve=W!==void 0?{"aria-selected":!!W}:void 0;return f.createElement("div",(0,w.Z)({ref:_,className:C()(r,"".concat(H,"-treenode"),(s={},(0,m.Z)(s,"".concat(H,"-treenode-disabled"),re),(0,m.Z)(s,"".concat(H,"-treenode-switcher-").concat(T?"open":"close"),!D),(0,m.Z)(s,"".concat(H,"-treenode-checkbox-checked"),L),(0,m.Z)(s,"".concat(H,"-treenode-checkbox-indeterminate"),Y),(0,m.Z)(s,"".concat(H,"-treenode-selected"),$),(0,m.Z)(s,"".concat(H,"-treenode-loading"),J),(0,m.Z)(s,"".concat(H,"-treenode-active"),j),(0,m.Z)(s,"".concat(H,"-treenode-leaf-last"),pe),(0,m.Z)(s,"".concat(H,"-treenode-draggable"),ne),(0,m.Z)(s,"dragging",oe),(0,m.Z)(s,"drop-target",ce===k),(0,m.Z)(s,"drop-container",de===k),(0,m.Z)(s,"drag-over",!re&&c),(0,m.Z)(s,"drag-over-gap-top",!re&&d),(0,m.Z)(s,"drag-over-gap-bottom",!re&&g),(0,m.Z)(s,"filter-node",te&&te((0,P.F)(this.props))),s)),style:t,draggable:ae,"aria-grabbed":oe,onDragStart:ae?this.onDragStart:void 0,onDragEnter:ne?this.onDragEnter:void 0,onDragOver:ne?this.onDragOver:void 0,onDragLeave:ne?this.onDragLeave:void 0,onDrop:ne?this.onDrop:void 0,onDragEnd:ne?this.onDragEnd:void 0,onMouseMove:Q},ve,le),f.createElement(A,{prefixCls:H,level:fe,isStart:Z,isEnd:x}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),p}(f.Component),o=function(h){return f.createElement(B.k.Consumer,null,function(p){return f.createElement(a,(0,w.Z)({},h,{context:p}))})};o.displayName="TreeNode",o.isTreeNode=1;var i=o},112:function(q,F,v){v.d(F,{k:function(){return m}});var w=v(41398),m=w.createContext(null)},93943:function(q,F,v){v.d(F,{BT:function(){return A},Ds:function(){return N},E6:function(){return b},L0:function(){return E},OM:function(){return I},_5:function(){return S},bt:function(){return f},r7:function(){return O},wA:function(){return C},yx:function(){return y}});var w=v(85942),m=v(86522),G=v(41398),z=v(18943),V=v(24432),X=null;function S(n,a){if(!n)return[];var o=n.slice(),i=o.indexOf(a);return i>=0&&o.splice(i,1),o}function E(n,a){var o=(n||[]).slice();return o.indexOf(a)===-1&&o.push(a),o}function y(n){return n.split("-")}function f(n,a){return"".concat(n,"-").concat(a)}function N(n){return n&&n.type&&n.type.isTreeNode}function C(n,a){var o=[],i=a[n];function u(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];h.forEach(function(p){var e=p.key,s=p.children;o.push(e),u(s)})}return u(i.children),o}function K(n){if(n.parent){var a=y(n.pos);return Number(a[a.length-1])===n.parent.children.length-1}return!1}function B(n){var a=y(n.pos);return Number(a[a.length-1])===0}function I(n,a,o,i,u,h,p,e,s,l){var k,r=n.clientX,t=n.clientY,c=n.target.getBoundingClientRect(),d=c.top,g=c.height,D=(l==="rtl"?-1:1)*(((u==null?void 0:u.x)||0)-r),Z=(D-12)/i,x=e[o.props.eventKey];if(t<d+g/2){var T=p.findIndex(function(H){return H.key===x.key}),$=T<=0?0:T-1,L=p[$].key;x=e[L]}var Y=x.key,J=x,_=x.key,j=0,ee=0;if(!s.includes(Y))for(var Q=0;Q<Z&&K(x);Q+=1)x=x.parent,ee+=1;var W=a.props.data,U=x.node,R=!0;return B(x)&&x.level===0&&t<d+g/2&&h({dragNode:W,dropNode:U,dropPosition:-1})&&x.key===o.props.eventKey?j=-1:(J.children||[]).length&&s.includes(_)?h({dragNode:W,dropNode:U,dropPosition:0})?j=0:R=!1:ee===0?Z>-1.5?h({dragNode:W,dropNode:U,dropPosition:1})?j=1:R=!1:h({dragNode:W,dropNode:U,dropPosition:0})?j=0:h({dragNode:W,dropNode:U,dropPosition:1})?j=1:R=!1:h({dragNode:W,dropNode:U,dropPosition:1})?j=1:R=!1,{dropPosition:j,dropLevelOffset:ee,dropTargetKey:x.key,dropTargetPos:x.pos,dragOverNodeKey:_,dropContainerKey:j===0?null:((k=x.parent)===null||k===void 0?void 0:k.key)||null,dropAllowed:R}}function A(n,a){if(n){var o=a.multiple;return o?n.slice():n.length?[n[0]]:n}}var P=function(a){return a};function M(n,a){if(!n)return[];var o=a||{},i=o.processProps,u=i===void 0?P:i,h=Array.isArray(n)?n:[n];return h.map(function(p){var e=p.children,s=_objectWithoutProperties(p,X),l=M(e,a);return React.createElement(TreeNode,_extends({key:s.key},u(s)),l)})}function b(n){if(!n)return null;var a;if(Array.isArray(n))a={checkedKeys:n,halfCheckedKeys:void 0};else if((0,m.Z)(n)==="object")a={checkedKeys:n.checked||void 0,halfCheckedKeys:n.halfChecked||void 0};else return(0,z.ZP)(!1,"`checkedKeys` is not an array or an object"),null;return a}function O(n,a){var o=new Set;function i(u){if(!o.has(u)){var h=a[u];if(h){o.add(u);var p=h.parent,e=h.node;e.disabled||p&&i(p.key)}}}return(n||[]).forEach(function(u){i(u)}),(0,w.Z)(o)}},27782:function(q,F,v){v.d(F,{S:function(){return X}});var w=v(18943);function m(S,E){var y=new Set;return S.forEach(function(f){E.has(f)||y.add(f)}),y}function G(S){var E=S||{},y=E.disabled,f=E.disableCheckbox,N=E.checkable;return!!(y||f)||N===!1}function z(S,E,y,f){for(var N=new Set(S),C=new Set,K=0;K<=y;K+=1){var B=E.get(K)||new Set;B.forEach(function(M){var b=M.key,O=M.node,n=M.children,a=n===void 0?[]:n;N.has(b)&&!f(O)&&a.filter(function(o){return!f(o.node)}).forEach(function(o){N.add(o.key)})})}for(var I=new Set,A=y;A>=0;A-=1){var P=E.get(A)||new Set;P.forEach(function(M){var b=M.parent,O=M.node;if(!(f(O)||!M.parent||I.has(M.parent.key))){if(f(M.parent.node)){I.add(b.key);return}var n=!0,a=!1;(b.children||[]).filter(function(o){return!f(o.node)}).forEach(function(o){var i=o.key,u=N.has(i);n&&!u&&(n=!1),!a&&(u||C.has(i))&&(a=!0)}),n&&N.add(b.key),a&&C.add(b.key),I.add(b.key)}})}return{checkedKeys:Array.from(N),halfCheckedKeys:Array.from(m(C,N))}}function V(S,E,y,f,N){for(var C=new Set(S),K=new Set(E),B=0;B<=f;B+=1){var I=y.get(B)||new Set;I.forEach(function(b){var O=b.key,n=b.node,a=b.children,o=a===void 0?[]:a;!C.has(O)&&!K.has(O)&&!N(n)&&o.filter(function(i){return!N(i.node)}).forEach(function(i){C.delete(i.key)})})}K=new Set;for(var A=new Set,P=f;P>=0;P-=1){var M=y.get(P)||new Set;M.forEach(function(b){var O=b.parent,n=b.node;if(!(N(n)||!b.parent||A.has(b.parent.key))){if(N(b.parent.node)){A.add(O.key);return}var a=!0,o=!1;(O.children||[]).filter(function(i){return!N(i.node)}).forEach(function(i){var u=i.key,h=C.has(u);a&&!h&&(a=!1),!o&&(h||K.has(u))&&(o=!0)}),a||C.delete(O.key),o&&K.add(O.key),A.add(O.key)}})}return{checkedKeys:Array.from(C),halfCheckedKeys:Array.from(m(K,C))}}function X(S,E,y,f){var N=[],C;f?C=f:C=G;var K=new Set(S.filter(function(P){var M=!!y[P];return M||N.push(P),M})),B=new Map,I=0;Object.keys(y).forEach(function(P){var M=y[P],b=M.level,O=B.get(b);O||(O=new Set,B.set(b,O)),O.add(M),I=Math.max(I,b)}),(0,w.ZP)(!N.length,"Tree missing follow keys: ".concat(N.slice(0,100).map(function(P){return"'".concat(P,"'")}).join(", ")));var A;return E===!0?A=z(K,B,I,C):A=V(K,E.halfCheckedKeys,B,I,C),A}},73855:function(q,F,v){v.d(F,{I8:function(){return M},F:function(){return O},zn:function(){return I},w$:function(){return K},oH:function(){return A},km:function(){return C},H8:function(){return b}});var w=v(86522),m=v(85942),G=v(33028),z=v(99980);function V(n,a){var o=(0,G.Z)({},n);return Array.isArray(a)&&a.forEach(function(i){delete o[i]}),o}var X=v(41398),S=v(48570);function E(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=[];return X.Children.forEach(n,function(i){i==null&&!a.keepEmpty||(Array.isArray(i)?o=o.concat(E(i)):(0,S.isFragment)(i)&&i.props?o=o.concat(E(i.props.children,a)):o.push(i))}),o}var y=v(18943),f=v(93943),N=["children"];function C(n,a){return n!=null?n:a}function K(n){var a=n||{},o=a.title,i=a._title,u=a.key,h=a.children,p=o||"title";return{title:p,_title:i||[p],key:u||"key",children:h||"children"}}function B(n,a){var o=new Map;function i(u){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";(u||[]).forEach(function(p){var e=p[a.key],s=p[a.children];warning(e!=null,"Tree node must have a certain key: [".concat(h).concat(e,"]"));var l=String(e);warning(!o.has(l)||e===null||e===void 0,"Same 'key' exist in the Tree: ".concat(l)),o.set(l,!0),i(s,"".concat(h).concat(l," > "))})}i(n)}function I(n){function a(o){var i=E(o);return i.map(function(u){if(!(0,f.Ds)(u))return(0,y.ZP)(!u,"Tree/TreeNode can only accept TreeNode as children."),null;var h=u.key,p=u.props,e=p.children,s=(0,z.Z)(p,N),l=(0,G.Z)({key:h},s),k=a(e);return k.length&&(l.children=k),l}).filter(function(u){return u})}return a(n)}function A(n,a,o){var i=K(o),u=i._title,h=i.key,p=i.children,e=new Set(a===!0?[]:a),s=[];function l(k){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return k.map(function(t,c){for(var d=(0,f.bt)(r?r.pos:"0",c),g=C(t[h],d),D,Z=0;Z<u.length;Z+=1){var x=u[Z];if(t[x]!==void 0){D=t[x];break}}var T=(0,G.Z)((0,G.Z)({},V(t,[].concat((0,m.Z)(u),[h,p]))),{},{title:D,key:g,parent:r,pos:d,children:null,data:t,isStart:[].concat((0,m.Z)(r?r.isStart:[]),[c===0]),isEnd:[].concat((0,m.Z)(r?r.isEnd:[]),[c===k.length-1])});return s.push(T),a===!0||e.has(g)?T.children=l(t[p]||[],T):T.children=[],T})}return l(n),s}function P(n,a,o){var i={};(0,w.Z)(o)==="object"?i=o:i={externalGetKey:o},i=i||{};var u=i,h=u.childrenPropName,p=u.externalGetKey,e=u.fieldNames,s=K(e),l=s.key,k=s.children,r=h||k,t;p?typeof p=="string"?t=function(g){return g[p]}:typeof p=="function"&&(t=function(g){return p(g)}):t=function(g,D){return C(g[l],D)};function c(d,g,D,Z){var x=d?d[r]:n,T=d?(0,f.bt)(D.pos,g):"0",$=d?[].concat((0,m.Z)(Z),[d]):[];if(d){var L=t(d,T),Y={node:d,index:g,pos:T,key:L,parentPos:D.node?D.pos:null,level:D.level+1,nodes:$};a(Y)}x&&x.forEach(function(J,_){c(J,_,{node:d,pos:T,level:D?D.level+1:-1},$)})}c(null)}function M(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.initWrapper,i=a.processEntity,u=a.onProcessFinished,h=a.externalGetKey,p=a.childrenPropName,e=a.fieldNames,s=arguments.length>2?arguments[2]:void 0,l=h||s,k={},r={},t={posEntities:k,keyEntities:r};return o&&(t=o(t)||t),P(n,function(c){var d=c.node,g=c.index,D=c.pos,Z=c.key,x=c.parentPos,T=c.level,$=c.nodes,L={node:d,nodes:$,index:g,key:Z,pos:D,level:T},Y=C(Z,D);k[D]=L,r[Y]=L,L.parent=k[x],L.parent&&(L.parent.children=L.parent.children||[],L.parent.children.push(L)),i&&i(L,t)},{externalGetKey:l,childrenPropName:p,fieldNames:e}),u&&u(t),t}function b(n,a){var o=a.expandedKeys,i=a.selectedKeys,u=a.loadedKeys,h=a.loadingKeys,p=a.checkedKeys,e=a.halfCheckedKeys,s=a.dragOverNodeKey,l=a.dropPosition,k=a.keyEntities,r=k[n],t={eventKey:n,expanded:o.indexOf(n)!==-1,selected:i.indexOf(n)!==-1,loaded:u.indexOf(n)!==-1,loading:h.indexOf(n)!==-1,checked:p.indexOf(n)!==-1,halfChecked:e.indexOf(n)!==-1,pos:String(r?r.pos:""),dragOver:s===n&&l===0,dragOverGapTop:s===n&&l===-1,dragOverGapBottom:s===n&&l===1};return t}function O(n){var a=n.data,o=n.expanded,i=n.selected,u=n.checked,h=n.loaded,p=n.loading,e=n.halfChecked,s=n.dragOver,l=n.dragOverGapTop,k=n.dragOverGapBottom,r=n.pos,t=n.active,c=n.eventKey,d=(0,G.Z)((0,G.Z)({},a),{},{expanded:o,selected:i,checked:u,loaded:h,loading:p,halfChecked:e,dragOver:s,dragOverGapTop:l,dragOverGapBottom:k,pos:r,active:t,key:c});return"props"in d||Object.defineProperty(d,"props",{get:function(){return(0,y.ZP)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),n}}),d}},68330:function(q,F,v){v.d(F,{Z:function(){return E}});var w=v(33028),m=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,G=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,z="".concat(m," ").concat(G).split(/[\s\n]+/),V="aria-",X="data-";function S(y,f){return y.indexOf(f)===0}function E(y){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,N;f===!1?N={aria:!0,data:!0,attr:!0}:f===!0?N={aria:!0}:N=(0,w.Z)({},f);var C={};return Object.keys(y).forEach(function(K){(N.aria&&(K==="role"||S(K,V))||N.data&&S(K,X)||N.attr&&z.includes(K))&&(C[K]=y[K])}),C}},18943:function(q,F,v){var w={};function m(E,y){}function G(E,y){}function z(){w={}}function V(E,y,f){!y&&!w[f]&&(E(!1,f),w[f]=!0)}function X(E,y){V(m,E,y)}function S(E,y){V(G,E,y)}F.ZP=X},33665:function(q,F,v){v.d(F,{Z:function(){return w}});function w(m){if(m==null)throw new TypeError("Cannot destructure "+m)}}}]);
