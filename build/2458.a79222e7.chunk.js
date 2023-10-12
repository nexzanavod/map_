(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2458],{3414:(v,g,e)=>{"use strict";e.d(g,{Z:()=>C});var t=e(67294),d=e(90731),r=e(96987),o=e(12473),a=e(31613),i=e(18226),u=e(97695),h=e(45697),s=e.n(h),T=e(86896),A=e(75975),n=e(29204);const c=(I,S,W,D)=>{const[P,k]=(0,t.useState)(!1),R=(0,a.lm)(),{post:j}=(0,a.kY)(),{formatAPIError:K}=(0,a.So)();return{regenerateData:async()=>{try{const{data:{data:{accessKey:$}}}=await j(`${I}${S}/regenerate`);k(!1),W($)}catch($){k(!1),D?D($):$ instanceof n.d7&&R({type:"warning",message:K($)})}},isLoadingConfirmation:P}},l=({onRegenerate:I,idToRegenerate:S,backUrl:W,onError:D})=>{const{formatMessage:P}=(0,T.Z)(),[k,R]=(0,t.useState)(!1),{regenerateData:j,isLoadingConfirmation:K}=c(W,S,I,D),Y=async()=>{j(),R(!1)};return t.createElement(t.Fragment,null,t.createElement(o.z,{startIcon:t.createElement(A.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>R(!0),name:"regenerate"},P({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(a.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(A.Z,null),isConfirmButtonLoading:K,isOpen:k,onToggleDialog:()=>R(!1),onConfirm:Y,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};l.defaultProps={onRegenerate(){},onError:void 0},l.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired,backUrl:s().string.isRequired,onError:s().func};const m=l,E=({title:I,token:S,setToken:W,canEditInputs:D,canRegenerate:P,isSubmitting:k,backUrl:R,regenerateUrl:j,onErrorRegenerate:K})=>{const{formatMessage:Y}=(0,T.Z)(),$=X=>{W({...S,accessKey:X})};return t.createElement(d.T,{title:S?.name||Y(I),primaryAction:D?t.createElement(r.k,{gap:2},P&&S?.id&&t.createElement(m,{backUrl:j,onRegenerate:$,idToRegenerate:S?.id,onError:K}),t.createElement(o.z,{disabled:k,loading:k,startIcon:t.createElement(i.Z,null),type:"submit",size:"S"},Y({id:"global.save",defaultMessage:"Save"}))):P&&S?.id&&t.createElement(m,{onRegenerate:$,idToRegenerate:S?.id,backUrl:j}),navigationAction:t.createElement(a.rU,{startIcon:t.createElement(u.Z,null),to:R},Y({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};E.propTypes={token:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setToken:s().func.isRequired,isSubmitting:s().bool.isRequired,backUrl:s().string.isRequired,title:s().shape({id:s().string,label:s().string}).isRequired,regenerateUrl:s().string.isRequired,onErrorRegenerate:s().func},E.defaultProps={token:void 0,onErrorRegenerate:void 0};const C=E},89982:(v,g,e)=>{"use strict";e.d(g,{Z:()=>T});var t=e(67294),d=e(59586),r=e(40933),o=e(10574),a=e(45697),i=e.n(a),u=e(86896),h=e(51352);const s=({token:A,errors:n,values:c,onChange:l,isCreating:m})=>{const{formatMessage:E}=(0,u.Z)();return t.createElement(t.Fragment,null,t.createElement(d.P,{name:"lifespan",label:E({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:c.lifespan!==null?c.lifespan:"0",error:n.lifespan?E(n.lifespan?.id?n.lifespan:{id:n.lifespan,defaultMessage:n.lifespan}):null,onChange:C=>{l({target:{name:"lifespan",value:C}})},required:!0,disabled:!m,placeholder:"Select"},t.createElement(r.W,{value:"604800000"},E({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(r.W,{value:"2592000000"},E({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(r.W,{value:"7776000000"},E({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(r.W,{value:"0"},E({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(o.Z,{variant:"pi",textColor:"neutral600"},!m&&`${E({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,h.IX)(A?.createdAt,parseInt(c.lifespan,10))}`))};s.propTypes={errors:i().shape({lifespan:i().string}),onChange:i().func.isRequired,values:i().shape({lifespan:i().oneOfType([i().number,i().string])}).isRequired,isCreating:i().bool.isRequired,token:i().shape({id:i().oneOfType([i().number,i().string]),type:i().string,lifespan:i().string,name:i().string,accessKey:i().string,permissions:i().array,description:i().string,createdAt:i().string})},s.defaultProps={errors:{},token:{}};const T=s},81384:(v,g,e)=>{"use strict";e.d(g,{Z:()=>T});var t=e(67294),d=e(96208),r=e(31613),o=e(43838),a=e(46374),i=e(45697),u=e.n(i),h=e(86896);const s=({token:A,tokenType:n})=>{const{formatMessage:c}=(0,h.Z)(),l=(0,r.lm)(),{trackUsage:m}=(0,r.rS)(),{copy:E}=(0,r.VP)(),C=I=>async()=>{await E(I)&&(m("didCopyTokenKey",{tokenType:n}),l({type:"success",message:{id:"Settings.tokens.notification.copied"}}))};return t.createElement(r.Y_,{endAction:A&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(d.h,{label:c({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),onClick:C(A),noBorder:!0,icon:t.createElement(o.Z,null),style:{padding:0,height:"1rem"}})),title:A||c({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:c(A?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(a.Z,null),iconBackground:"neutral100"})};s.defaultProps={token:null},s.propTypes={token:u().string,tokenType:u().string.isRequired};const T=s},37651:(v,g,e)=>{"use strict";e.d(g,{Z:()=>u});var t=e(67294),d=e(457),r=e(45697),o=e.n(r),a=e(86896);const i=({errors:h,values:s,onChange:T,canEditInputs:A})=>{const{formatMessage:n}=(0,a.Z)();return t.createElement(d.g,{label:n({id:"Settings.tokens.form.description",defaultMessage:"Description"}),id:"description",error:h.description?n(h.description?.id?h.description:{id:h.description,defaultMessage:h.description}):null,onChange:T,disabled:!A},s.description)};i.propTypes={errors:o().shape({description:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({description:o().string}).isRequired},i.defaultProps={errors:{}};const u=i},72028:(v,g,e)=>{"use strict";e.d(g,{Z:()=>u});var t=e(67294),d=e(38670),r=e(45697),o=e.n(r),a=e(86896);const i=({errors:h,values:s,onChange:T,canEditInputs:A})=>{const{formatMessage:n}=(0,a.Z)();return t.createElement(d.o,{name:"name",error:h.name?n(h.name?.id?h.name:{id:h.name,defaultMessage:h.name}):null,label:n({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:T,value:s.name,disabled:!A,required:!0})};i.propTypes={errors:o().shape({name:o().string}),onChange:o().func.isRequired,canEditInputs:o().bool.isRequired,values:o().shape({name:o().string}).isRequired},i.defaultProps={errors:{}};const u=i},32381:(v,g,e)=>{"use strict";e.d(g,{Z:()=>h});var t=e(67294),d=e(59586),r=e(40933),o=e(45697),a=e.n(o),i=e(86896);const u=({name:s,errors:T,values:A,onChange:n,canEditInputs:c,options:l,label:m})=>{const{formatMessage:E}=(0,i.Z)();return t.createElement(d.P,{name:s,label:E({id:m.id,defaultMessage:m.defaultMessage}),value:A&&A[s],error:T[s]?E(T[s]?.id?T[s]:{id:T[s],defaultMessage:T[s]}):null,onChange:n,placeholder:"Select",required:!0,disabled:!c},l&&l.map(({value:C,label:I})=>t.createElement(r.W,{key:C,value:C},E(I))))};u.propTypes={name:a().string,options:a().arrayOf(a().shape({label:a().shape({id:a().string,defaultMessage:a().string}),value:a().string})),errors:a().shape({type:a().string}),onChange:a().func.isRequired,canEditInputs:a().bool.isRequired,values:a().shape({type:a().string}).isRequired,label:a().shape({id:a().string,defaultMessage:a().string}).isRequired},u.defaultProps={name:"type",errors:{},options:[]};const h=u},81966:(v,g,e)=>{"use strict";e.d(g,{Z:()=>t,f:()=>d});const t="api-token",d="transfer-token"},92458:(v,g,e)=>{"use strict";e.d(g,{Z:()=>Ye});var t=e(67294),d=e(40720),r=e(34726),o=e(96987),a=e(31613),i=e(41054),u=e(86896),h=e(88767),s=e(86706),T=e(16550),A=e(45697),n=e.n(A);const c=(0,t.createContext)({}),l=({children:p,...f})=>t.createElement(c.Provider,{value:f},p),m=()=>(0,t.useContext)(c);l.propTypes={children:n().node.isRequired};var E=e(96854),C=e(36364),I=e(81966),S=e(3414),W=e(81384),D=e(16607),P=e(10574),k=e(31988),R=e(6498),j=e(89982),K=e(37651),Y=e(72028),$=e(32381);const X=({errors:p,onChange:f,canEditInputs:y,isCreating:L,values:x,apiToken:B,onDispatch:O,setHasChangedPermissions:G})=>{const{formatMessage:z}=(0,u.Z)(),H=({target:{value:V}})=>{G(!1),V==="full-access"&&O({type:"SELECT_ALL_ACTIONS"}),V==="read-only"&&O({type:"ON_CHANGE_READ_ONLY"})},w=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(D.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement(P.Z,{variant:"delta",as:"h2"},z({id:"global.details",defaultMessage:"Details"})),t.createElement(k.r,{gap:5},t.createElement(R.P,{key:"name",col:6,xs:12},t.createElement(Y.Z,{errors:p,values:x,canEditInputs:y,onChange:f})),t.createElement(R.P,{key:"description",col:6,xs:12},t.createElement(K.Z,{errors:p,values:x,canEditInputs:y,onChange:f})),t.createElement(R.P,{key:"lifespan",col:6,xs:12},t.createElement(j.Z,{isCreating:L,errors:p,values:x,onChange:f,token:B})),t.createElement(R.P,{key:"type",col:6,xs:12},t.createElement($.Z,{values:x,errors:p,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:V=>{H({target:{value:V}}),f({target:{name:"type",value:V}})},options:w,canEditInputs:y})))))};X.propTypes={errors:n().shape({name:n().string,description:n().string,lifespan:n().string,type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string,description:n().string,lifespan:n().oneOfType([n().number,n().string]),type:n().string}).isRequired,isCreating:n().bool.isRequired,apiToken:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string}),onDispatch:n().func.isRequired,setHasChangedPermissions:n().func.isRequired},X.defaultProps={errors:{},apiToken:{}};const J=X;var ne=e(90731),le=e(12473),ve=e(18226);const _=({apiTokenName:p})=>{const{formatMessage:f}=(0,u.Z)();return(0,a.go)(),t.createElement(d.o,{"aria-busy":"true"},t.createElement(a.SL,{name:"API Tokens"}),t.createElement(ne.T,{primaryAction:t.createElement(le.z,{disabled:!0,startIcon:t.createElement(ve.Z,null),type:"button",size:"L"},f({id:"global.save",defaultMessage:"Save"})),title:p||f({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(r.D,null,t.createElement(a.dO,null)))};_.defaultProps={apiTokenName:null},_.propTypes={apiTokenName:n().string};const de=_;var ce=e(35161),se=e.n(ce),ae=e(13217),oe=e.n(ae),re=e(88972);const Me=p=>{switch(p){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},xe=(0,re.ZP)(D.x)`
  margin: -1px;
  border-radius: ${({theme:p})=>p.spaces[1]} 0 0 ${({theme:p})=>p.spaces[1]};
`;function pe({route:p}){const{formatMessage:f}=(0,u.Z)(),{method:y,handler:L,path:x}=p,B=x?oe()(x.split("/")):[],[O="",G=""]=L?L.split("."):[],z=Me(p.method);return t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(P.Z,{variant:"delta",as:"h3"},f({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,O),t.createElement(P.Z,{variant:"delta",textColor:"primary600"},".",G)),t.createElement(o.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(xe,{background:z.background,borderColor:z.border,padding:2},t.createElement(P.Z,{fontWeight:"bold",textColor:z.text},y)),t.createElement(D.x,{paddingLeft:2,paddingRight:2},se()(B,H=>t.createElement(P.Z,{key:H,textColor:H.includes(":")?"neutral600":"neutral900"},"/",H)))))}pe.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},pe.propTypes={route:n().shape({handler:n().string,method:n().string,path:n().string})};const Oe=pe,Re=()=>{const{value:{selectedAction:p,routes:f}}=m(),{formatMessage:y}=(0,u.Z)(),L=p?.split(".")[0];return t.createElement(R.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},p?t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},f[L]?.map(x=>x.config.auth?.scope?.includes(p)||x.handler===p?t.createElement(Oe,{key:x.handler,route:x}):null)):t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(P.Z,{variant:"delta",as:"h3"},y({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement(P.Z,{as:"p",textColor:"neutral600"},y({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var Ie=e(63122),De=e(1744),Se=e(68889),Ae=e(22546),Le=e(40989),ke=e(48403),Be=e.n(ke);const Ce=(0,re.iv)`
  background: ${p=>p.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ue=(0,re.ZP)(D.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${p=>p.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${p=>p.isActive&&Ce}
  &:hover {
    ${Ce}
  }
`,Ze=re.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:p})=>p.colors.neutral150};
`,ue=({controllers:p,label:f,orderNumber:y,disabled:L,onExpanded:x,indexExpandendCollapsedContent:B})=>{const{value:{onChangeSelectAll:O,onChange:G,selectedActions:z,setSelectedAction:H,selectedAction:w}}=m(),[V,ie]=(0,t.useState)(!1),{formatMessage:Ee}=(0,u.Z)(),q=()=>{ie(U=>!U),x(y)};(0,t.useEffect)(()=>{B!==null&&B!==y&&V&&ie(!1)},[B,y,V]);const b=U=>U===w;return t.createElement(Ie.U,{expanded:V,onToggle:q,variant:y%2?"primary":"secondary"},t.createElement(De.B,{title:Be()(f)}),t.createElement(Se.v,null,p?.map(U=>{const ee=U.actions.every(N=>z.includes(N.actionId)),fe=U.actions.some(N=>z.includes(N.actionId));return t.createElement(D.x,{key:`${f}.${U?.controller}`},t.createElement(o.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(D.x,{paddingRight:4},t.createElement(P.Z,{variant:"sigma",textColor:"neutral600"},U?.controller)),t.createElement(Ze,null),t.createElement(D.x,{paddingLeft:4},t.createElement(Ae.X,{value:ee,indeterminate:!ee&&fe,onValueChange:()=>{O({target:{value:[...U.actions]}})},disabled:L},Ee({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(k.r,{gap:4,padding:4},U?.actions&&U?.actions.map(N=>t.createElement(R.P,{col:6,key:N.actionId},t.createElement(Ue,{isActive:b(N.actionId),padding:2,hasRadius:!0},t.createElement(Ae.X,{value:z.includes(N.actionId),name:N.actionId,onValueChange:()=>{G({target:{value:N.actionId}})},disabled:L},N.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>H({target:{value:N.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(Le.Z,null)))))))})))};ue.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},ue.propTypes={controllers:n().array,orderNumber:n().number,label:n().string.isRequired,disabled:n().bool,onExpanded:n().func,indexExpandendCollapsedContent:n().number};const We=ue,ge=({section:p,...f})=>{const[y,L]=(0,t.useState)(null),x=B=>L(B);return t.createElement(D.x,{padding:4,background:"neutral0"},p&&p.map((B,O)=>t.createElement(We,{key:B.apiId,label:B.label,controllers:B.controllers,orderNumber:O,indexExpandendCollapsedContent:y,onExpanded:x,name:B.apiId,...f})))};ge.defaultProps={section:null},ge.propTypes={section:n().arrayOf(n().object)};const be=ge,Ke=({...p})=>{const{value:{data:f}}=m(),{formatMessage:y}=(0,u.Z)();return t.createElement(k.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(R.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement(P.Z,{variant:"delta",as:"h2"},y({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement(P.Z,{as:"p",textColor:"neutral600"},y({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),f?.permissions&&t.createElement(be,{section:f?.permissions,...p})),t.createElement(Re,null))},$e=(0,t.memo)(Ke);var me=e(51352);const Ne=(p,f=[])=>({...p,selectedAction:null,routes:[],selectedActions:[],data:(0,me.mk)(f)});var je=e(18172),Fe=e(97019),Pe=e.n(Fe);const ze={data:{},selectedActions:[]},He=(p,f)=>(0,je.ZP)(p,y=>{switch(f.type){case"ON_CHANGE":{y.selectedActions.includes(f.value)?Pe()(y.selectedActions,f.value):y.selectedActions.push(f.value);break}case"SELECT_ALL_IN_PERMISSION":{f.value.every(x=>y.selectedActions.includes(x.actionId))?f.value.forEach(x=>{Pe()(y.selectedActions,x.actionId)}):f.value.forEach(x=>{y.selectedActions.push(x.actionId)});break}case"SELECT_ALL_ACTIONS":{y.selectedActions=[...y.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const L=y.data.allActionsIds.filter(x=>x.includes("find")||x.includes("findOne"));y.selectedActions=[...L];break}case"UPDATE_PERMISSIONS_LAYOUT":{y.data=(0,me.mk)(f.value);break}case"UPDATE_ROUTES":{y.routes={...f.value};break}case"UPDATE_PERMISSIONS":{y.selectedActions=[...f.value];break}case"SET_SELECTED_ACTION":{y.selectedAction=f.value;break}default:return y}}),Ve="Name already taken",Ye=()=>{(0,a.go)();const{formatMessage:p}=(0,u.Z)(),{lockApp:f,unlockApp:y}=(0,a.o1)(),L=(0,a.lm)(),x=(0,T.k6)(),B=(0,s.v9)(C._),[O,G]=(0,t.useState)(x.location.state?.apiToken.accessKey?{...x.location.state.apiToken}:null),{trackUsage:z}=(0,a.rS)(),H=(0,t.useRef)(z),{setCurrentStep:w}=(0,a.c1)(),{allowedActions:{canCreate:V,canUpdate:ie,canRegenerate:Ee}}=(0,a.ss)(B.settings["api-tokens"]),[q,b]=(0,t.useReducer)(He,ze,M=>Ne(M,{})),{params:{id:U}}=(0,T.$B)("/settings/api-tokens/:id"),{get:ee,post:fe,put:N}=(0,a.kY)(),F=U==="create";(0,h.useQuery)("content-api-permissions",async()=>{const[M,Q]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async te=>{const{data:Z}=await ee(te);return Z.data}));b({type:"UPDATE_PERMISSIONS_LAYOUT",value:M}),b({type:"UPDATE_ROUTES",value:Q}),O&&(O?.type==="read-only"&&b({type:"ON_CHANGE_READ_ONLY"}),O?.type==="full-access"&&b({type:"SELECT_ALL_ACTIONS"}),O?.type==="custom"&&b({type:"UPDATE_PERMISSIONS",value:O?.permissions}))},{onError(){L({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{H.current(F?"didAddTokenFromList":"didEditTokenFromList",{tokenType:I.Z})},[F]);const{status:Ge}=(0,h.useQuery)(["api-token",U],async()=>{const{data:{data:M}}=await ee(`/admin/api-tokens/${U}`);return G({...M}),M?.type==="read-only"&&b({type:"ON_CHANGE_READ_ONLY"}),M?.type==="full-access"&&b({type:"SELECT_ALL_ACTIONS"}),M?.type==="custom"&&b({type:"UPDATE_PERMISSIONS",value:M?.permissions}),M},{enabled:!F&&!O,onError(){L({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Xe=async(M,Q)=>{H.current(F?"willCreateToken":"willEditToken",{tokenType:I.Z}),f();const te=M.lifespan&&parseInt(M.lifespan,10)&&M.lifespan!=="0"?parseInt(M.lifespan,10):null;try{const{data:{data:Z}}=F?await fe("/admin/api-tokens",{...M,lifespan:te,permissions:M.type==="custom"?q.selectedActions:null}):await N(`/admin/api-tokens/${U}`,{name:M.name,description:M.description,type:M.type,permissions:M.type==="custom"?q.selectedActions:null});F&&(x.replace(`/settings/api-tokens/${Z.id}`,{apiToken:Z}),w("apiTokens.success")),y(),G({...Z}),L({type:"success",message:p(F?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),H.current(F?"didCreateToken":"didEditToken",{type:O.type,tokenType:I.Z})}catch(Z){const Te=(0,E.Iz)(Z.response.data);Q.setErrors(Te),Z?.response?.data?.error?.message===Ve?L({type:"warning",message:Z.response.data.message||"notification.error.tokennamenotunique"}):L({type:"warning",message:Z?.response?.data?.message||"notification.error"}),y()}},[Qe,ye]=(0,t.useState)(!1),Je={...q,onChange:({target:{value:M}})=>{ye(!0),b({type:"ON_CHANGE",value:M})},onChangeSelectAll:({target:{value:M}})=>{ye(!0),b({type:"SELECT_ALL_IN_PERMISSION",value:M})},setSelectedAction:({target:{value:M}})=>{b({type:"SET_SELECTED_ACTION",value:M})}},he=ie&&!F||V&&F;return!F&&!O&&Ge!=="success"?t.createElement(de,{apiTokenName:O?.name}):t.createElement(l,{value:Je},t.createElement(d.o,null,t.createElement(a.SL,{name:"API Tokens"}),t.createElement(i.J9,{validationSchema:me.fK,validateOnChange:!1,initialValues:{name:O?.name||"",description:O?.description||"",type:O?.type,lifespan:O?.lifespan?O.lifespan.toString():O?.lifespan},enableReinitialize:!0,onSubmit:(M,Q)=>Xe(M,Q)},({errors:M,handleChange:Q,isSubmitting:te,values:Z,setFieldValue:Te})=>(Qe&&Z?.type!=="custom"&&Te("type","custom"),t.createElement(a.l0,null,t.createElement(S.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:O,setToken:G,canEditInputs:he,canRegenerate:Ee,isSubmitting:te,regenerateUrl:"/admin/api-tokens/"}),t.createElement(r.D,null,t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(O?.name)&&t.createElement(W.Z,{token:O?.accessKey,tokenType:I.Z}),t.createElement(J,{errors:M,onChange:Q,canEditInputs:he,isCreating:F,values:Z,apiToken:O,onDispatch:b,setHasChangedPermissions:ye}),t.createElement($e,{disabled:!he||Z?.type==="read-only"||Z?.type==="full-access"}))))))))}},51352:(v,g,e)=>{"use strict";e.d(g,{IX:()=>a,fK:()=>s,mk:()=>A});var t=e(5728),d=e(77349),r=e(51991);const a=(n,c,l="en")=>{if(c&&typeof c=="number"){const m=c/24/60/60/1e3;return(0,t.Z)((0,d.Z)(new Date(n),m),"PPP",{locale:r[l]})}return"Unlimited"};var i=e(31613),u=e(87561);const s=u.Ry().shape({name:u.Z_(i.I0.string).max(100).required(i.I0.required),type:u.Z_(i.I0.string).oneOf(["read-only","full-access","custom"]).required(i.I0.required),description:u.Z_().nullable(),lifespan:u.Rx().integer().min(0).nullable().defined(i.I0.required)}),A=n=>{const c={allActionsIds:[],permissions:[]};return c.permissions=Object.keys(n).map(l=>({apiId:l,label:l.split("::")[1],controllers:Object.keys(n[l].controllers).map(m=>({controller:m,actions:n[l].controllers[m].map(E=>{const C=`${l}.${m}.${E}`;return l.includes("api::")&&c.allActionsIds.push(C),{action:E,actionId:C}}).flat()})).flat()})),c}},41848:v=>{function g(e,t,d,r){for(var o=e.length,a=d+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}v.exports=g},42118:(v,g,e)=>{var t=e(41848),d=e(62722),r=e(42351);function o(a,i,u){return i===i?r(a,i,u):t(a,d,u)}v.exports=o},74221:v=>{function g(e,t,d,r){for(var o=d-1,a=e.length;++o<a;)if(r(e[o],t))return o;return-1}v.exports=g},62722:v=>{function g(e){return e!==e}v.exports=g},65464:(v,g,e)=>{var t=e(29932),d=e(42118),r=e(74221),o=e(7518),a=e(278),i=Array.prototype,u=i.splice;function h(s,T,A,n){var c=n?r:d,l=-1,m=T.length,E=s;for(s===T&&(T=a(T)),A&&(E=t(s,o(A)));++l<m;)for(var C=0,I=T[l],S=A?A(I):I;(C=c(E,S,C,n))>-1;)E!==s&&u.call(E,C,1),u.call(s,C,1);return s}v.exports=h},42351:v=>{function g(e,t,d){for(var r=d-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}v.exports=g},35161:(v,g,e)=>{var t=e(29932),d=e(67206),r=e(69199),o=e(1469);function a(i,u){var h=o(i)?t:r;return h(i,d(u,3))}v.exports=a},97019:(v,g,e)=>{var t=e(5976),d=e(45604),r=t(d);v.exports=r},45604:(v,g,e)=>{var t=e(65464);function d(r,o){return r&&r.length&&o&&o.length?t(r,o):r}v.exports=d},13217:(v,g,e)=>{var t=e(14259);function d(r){var o=r==null?0:r.length;return o?t(r,1,o):[]}v.exports=d},63122:(v,g,e)=>{"use strict";e.d(g,{U:()=>n,y:()=>T});var t=e(85893),d=e(67294),r=e(88972),o=e(31254),a=e(92058),i=e(10574),u=e(96987),h=e(16607);const s=({theme:c,expanded:l,variant:m,disabled:E,error:C})=>C?`1px solid ${c.colors.danger600} !important`:E?`1px solid ${c.colors.neutral150}`:l?`1px solid ${c.colors.primary600}`:m==="primary"?`1px solid ${c.colors.neutral0}`:`1px solid ${c.colors.neutral100}`,T=(0,r.ZP)(i.Z)``,A=(0,r.ZP)(h.x)`
  border: ${s};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    ${T} {
      color: ${({theme:c,expanded:l})=>l?void 0:c.colors.primary700};
    }

    ${i.Z} {
      color: ${({theme:c,expanded:l})=>l?void 0:c.colors.primary600};
    }

    & > ${u.k} {
      background: ${({theme:c})=>c.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:c})=>c.colors.primary200};
    }
  }
`,n=({children:c,disabled:l=!1,error:m,expanded:E=!1,hasErrorMessage:C=!0,id:I,onToggle:S,toggle:W,size:D="M",variant:P="primary",shadow:k})=>{const R=(0,a.M)(I),j=d.useMemo(()=>({expanded:E,onToggle:S,toggle:W,id:R,size:D,variant:P,disabled:l}),[l,E,R,S,D,W,P]);return(0,t.jsxs)(o.S.Provider,{value:j,children:[(0,t.jsx)(A,{"data-strapi-expanded":E,disabled:l,"aria-disabled":l,expanded:E,hasRadius:!0,variant:P,error:m,shadow:k,children:c}),m&&C&&(0,t.jsx)(h.x,{paddingTop:1,children:(0,t.jsx)(i.Z,{variant:"pi",textColor:"danger600",children:m})})]})}},68889:(v,g,e)=>{"use strict";e.d(g,{v:()=>o});var t=e(85893),d=e(31254),r=e(16607);const o=({children:a,...i})=>{const{expanded:u,id:h}=(0,d.A)();if(!u)return null;const s=`accordion-content-${h}`,T=`accordion-label-${h}`,A=`accordion-desc-${h}`;return(0,t.jsx)(r.x,{role:"region",id:s,"aria-labelledby":T,"aria-describedby":A,...i,children:a})}},31254:(v,g,e)=>{"use strict";e.d(g,{A:()=>r,S:()=>d});var t=e(67294);const d=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),r=()=>(0,t.useContext)(d)},1744:(v,g,e)=>{"use strict";e.d(g,{B:()=>c});var t=e(85893),d=e(58471),r=e(88972),o=e(63122),a=e(31254);const i=({expanded:l,disabled:m,variant:E})=>{let C="neutral100";return l?C="primary100":m?C="neutral150":E==="primary"&&(C="neutral0"),C};var u=e(58753),h=e(85200),s=e(96987),T=e(10574);const A=(0,r.ZP)(u.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:l,expanded:m})=>m?l.colors.primary600:l.colors.neutral500};
    }
  }
`,n=(0,r.ZP)(s.k)`
  min-height: ${({theme:l,size:m})=>l.sizes.accordions[m]};
  border-radius: ${({theme:l,expanded:m})=>m?`${l.borderRadius} ${l.borderRadius} 0 0`:l.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.primary600};
      }
    }
  }
`,c=({title:l,description:m,as:E="span",togglePosition:C="right",action:I,...S})=>{const{onToggle:W,toggle:D,expanded:P,id:k,size:R,variant:j,disabled:K}=(0,a.A)(),Y=`accordion-content-${k}`,$=`accordion-label-${k}`,X=`accordion-desc-${k}`,J=R==="M"?6:4,ne=R==="M"?J:J-2,le=i({expanded:P,disabled:K,variant:j}),_={as:E,fontWeight:R==="S"?"bold":void 0,id:$,textColor:P?"primary600":"neutral700",ellipsis:!0,variant:R==="M"?"delta":void 0},de=P?"primary600":"neutral600",ce=P?"primary200":"neutral200",se=R==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{K||(D&&!W?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),D()):W&&W())},oe=(0,t.jsx)(s.k,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:P?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:K?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(h.J,{as:d.Z,width:R==="M"?`${11/16}rem`:`${8/16}rem`,color:P?"primary600":"neutral600"})});return(0,t.jsx)(n,{paddingBottom:ne,paddingLeft:J,paddingRight:J,paddingTop:ne,background:le,expanded:P,size:R,justifyContent:"space-between",cursor:K?"not-allowed":"",children:(0,t.jsxs)(s.k,{gap:3,flex:1,maxWidth:"100%",children:[C==="left"&&oe,(0,t.jsx)(A,{onClick:ae,"aria-disabled":K,"aria-expanded":P,"aria-controls":Y,"aria-labelledby":$,"data-strapi-accordion-toggle":!0,expanded:P,type:"button",flex:1,minWidth:0,...S,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.y,{..._,children:l}),m&&(0,t.jsx)(T.Z,{as:"p",id:X,textColor:de,children:m})]})}),C==="right"&&(0,t.jsxs)(s.k,{gap:3,children:[oe,I]}),C==="left"&&I]})})}}}]);
