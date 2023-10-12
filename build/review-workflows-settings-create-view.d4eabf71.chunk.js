"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[8936],{36318:(ve,I,t)=>{t.r(I),t.d(I,{default:()=>ne});var e=t(67294),c=t(31613),f=t(86706),z=t(36364),H=t(12473),p=t(96987),X=t(74863),R=t(10574),Z=t(18226),E=t(41054),B=t(36968),J=t.n(B),N=t(86896),Q=t(88767),U=t(16550),$=t(51754),G=t(92686),K=t(79194),b=t(75021),g=t(11984),m=t(43390),d=t(38705),q=t(68997),_=t(85230),n=t(86978),ee=t(52258),te=t(3848),w=t(65649),se=t(66578);function oe(){const{formatMessage:o}=(0,N.Z)(),{post:ae}=(0,c.kY)(),{push:le}=(0,U.k6)(),{formatAPIError:re}=(0,c.So)(),i=(0,f.I0)(),v=(0,c.lm)(),{collectionTypes:W,singleTypes:A,isLoading:k}=(0,G.G)(),{isLoading:h,meta:S,workflows:C}=(0,ee.n)(),{isLoading:L,roles:D}=(0,$.F)(void 0,{retry:!1}),y=(0,f.v9)(w.xU),ie=(0,f.v9)(w.bH),l=(0,f.v9)(w.DV),P=(0,f.v9)(w.g$),[x,u]=e.useState(!1),{isLoading:F,getFeature:ce}=(0,b.q)(),[fe,ge]=e.useState(null),[O,T]=e.useState({}),a=ce("review-workflows"),V=C.flatMap(s=>s.contentTypes),{mutateAsync:de,isLoading:ue}=(0,Q.useMutation)(async({workflow:s})=>{const{data:{data:r}}=await ae("/admin/review-workflows/workflows",{data:s});return r},{onSuccess(){v({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}})}}),Y=async()=>{T({});try{const s=await de({workflow:l});return le(`/settings/review-workflows/${s.id}`),s}catch(s){return s.response.data?.error?.name==="ValidationError"&&s.response.data?.error?.details?.errors?.length>0&&ge(s.response.data?.error?.details?.errors.reduce((r,j)=>(J()(r,j.path,j.message),r),{})),v({type:"warning",message:re(s)}),null}},me=async()=>{await Y()},we=()=>{T({})},M=(0,E.TA)({enableReinitialize:!0,initialErrors:fe,initialValues:l,async onSubmit(){const s=l.contentTypes.some(r=>V.includes(r));a?.[n.Ef]&&S?.workflowCount>=parseInt(a[n.Ef],10)?u("workflow"):a?.[n._X]&&l.stages.length>=parseInt(a[n._X],10)?u("stage"):s?T(r=>({...r,hasReassignedContentTypes:!0})):Y()},validate(s){return(0,se.V)({values:s,formatMessage:o})}});return(0,K.v)(n.sN,te.I),e.useEffect(()=>{i((0,g.Js)()),h||i((0,g.PP)({workflows:C})),k||i((0,g.Pz)({collectionTypes:W,singleTypes:A})),L||i((0,g.Lk)(D)),i((0,g.wt)(k||L)),i((0,g.CI)({name:""}))},[W,i,k,L,h,D,A,C]),e.useEffect(()=>{!h&&!F&&(a?.[n.Ef]&&S?.workflowsTotal>=parseInt(a[n.Ef],10)?u("workflow"):a?.[n._X]&&l.stages.length>=parseInt(a[n._X],10)&&u("stage"))},[F,h,a,S?.workflowsTotal,l.stages.length]),e.useEffect(()=>{!y&&P.length===0&&v({blockTransition:!0,type:"warning",message:o({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[o,y,P,v]),e.createElement(e.Fragment,null,e.createElement(m.lx,null),e.createElement(E.Hy,{value:M},e.createElement(E.l0,{onSubmit:M.handleSubmit},e.createElement(m.h4,{navigationAction:e.createElement(m.eJ,{href:"/settings/review-workflows"}),primaryAction:e.createElement(H.z,{startIcon:e.createElement(Z.Z,null),type:"submit",size:"M",disabled:!ie,isLoading:ue},o({id:"global.save",defaultMessage:"Save"})),title:o({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:o({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:l?.stages?.length??0})}),e.createElement(m.fC,null,e.createElement(p.k,{alignItems:"stretch",direction:"column",gap:7},y?e.createElement(X.a,null,o({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})):e.createElement(p.k,{alignItems:"stretch",direction:"column",gap:7},e.createElement(_.Y,null),e.createElement(q.U,{stages:M.values?.stages})))))),e.createElement(c.QH.Root,{isConfirmButtonLoading:y,isOpen:Object.keys(O).length>0,onToggleDialog:we,onConfirm:me},e.createElement(c.QH.Body,null,e.createElement(p.k,{direction:"column",gap:5},O.hasReassignedContentTypes&&e.createElement(R.Z,{textAlign:"center",variant:"omega"},o({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:V.filter(s=>l.contentTypes.includes(s)).length})),e.createElement(R.Z,{textAlign:"center",variant:"omega"},o({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"}))))),e.createElement(d.fC,{isOpen:x==="workflow",onClose:()=>u(!1)},e.createElement(d.Dx,null,o({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(d.uT,null,o({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(d.fC,{isOpen:x==="stage",onClose:()=>u(!1)},e.createElement(d.Dx,null,o({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(d.uT,null,o({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function ne(){const o=(0,f.v9)(z._);return e.createElement(c.O4,{permissions:o.settings["review-workflows"].create},e.createElement(oe,null))}}}]);
