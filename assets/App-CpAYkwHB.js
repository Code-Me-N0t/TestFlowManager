import{j as e,H as D,g as oe,u as ae,e as le,r as n,h as ne,B as E,i as ce,v as V,E as re,k as ie,l as de,m as ue,M as he,C as pe,P as xe,F as v,b as fe,n as Ce,o as be,p as ge,q as me,s as we,Q as Ee}from"./vendor-CnLy6pY0.js";import{M as ve}from"./components-DwnfSuTI.js";const Se=({data:r,selected:i})=>{const{label:S,testCases:j,color:u}=r,b=j.length;return e.jsxs("div",{className:`text-xs outline rounded relative p-2 text-[#ECF0F1] max-w-[150px] text-center ${i?"outline-[#2980B9]":"outline-[#373737]"}`,children:[e.jsx("div",{children:S}),e.jsx(D,{type:"source",position:"right"}),e.jsx(D,{type:"target",position:"left"}),b>0&&e.jsx("div",{className:"absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-full bg-[#E0E0E0] text-slate-700 flex items-center justify-center text-xs",children:b})]})},je=Se,ye=({data:r})=>e.jsxs("div",{className:"text-[#ECF0F1] text-xs rounded-full w-[50px] h-[50px] flex justify-center items-center bg-[#34495E]",children:[e.jsx("div",{children:r.label}),e.jsx(D,{type:"source",position:"right"}),e.jsx(D,{type:"target",position:"left"})]}),ke=ye,Ne=({id:r,sourceX:i,sourceY:S,targetX:j,targetY:u,sourcePosition:b,targetPosition:P,markerEnd:y,data:a})=>{const[k,h,B]=oe({sourceX:i,sourceY:S,targetX:j,targetY:u,sourcePosition:b,targetPosition:P});return e.jsxs(e.Fragment,{children:[e.jsx("path",{id:r,className:"stroke-[#BDC3C7] stroke-[2] fill-none",d:k,markerEnd:y}),(a==null?void 0:a.label)&&e.jsx("text",{x:h,y:B,style:{fontSize:12},textAnchor:"middle",children:a.label})]})},Fe=Ne;function De(){var L,M,I;const[r,i,S]=ae([]),[j,u,b]=le([]),[P,y]=n.useState(!1),[a,k]=n.useState(null),[h,B]=n.useState(null),{setViewport:A}=ne(),W={customNode:je,connector:ke},q={customEdge:Fe},C={toastDelete:n.useCallback(()=>{E.error("No node selected to delete.",{autoClose:1e3})},[]),toastDeleteSuccess:n.useCallback(()=>{E.success("Node Deleted.",{autoClose:1e3})},[]),toastSaveError:n.useCallback(()=>{E.error("Server Save Failed: Unable to save changes.",{autoClose:1e3})},[]),toastSaveSuccess:n.useCallback(()=>{E.success("Changes saved successfully!",{autoClose:1e3})},[]),toastSaveErrorLocal:n.useCallback(()=>{E.error("Local Save Failed: Unable to save changes locally.",{autoClose:1e3})},[]),toastSaveLocalSuccess:n.useCallback(()=>{E.success("Changes saved locally!",{autoClose:1e3})},[])},[g,T]=n.useState({total:0,notstarted:0,passed:0,failed:0,blocked:0,notapplicable:0}),[H,J]=n.useState(!1),N=n.useRef(null),U=n.useCallback(()=>{J(s=>!s)},[]);n.useEffect(()=>{(async()=>{try{const t=await fetch("https://code-me-n0t.github.io/TestFlowManager/flow.json");if(t.ok){const o=await t.json(),{x:l=0,y:p=0,zoom:F=1}=o.viewport||{},d=(o.nodes||[]).map(c=>{var f,m,O;return{...c,position:{x:typeof((f=c.position)==null?void 0:f.x)=="number"?c.position.x:0,y:typeof((m=c.position)==null?void 0:m.y)=="number"?c.position.y:0},style:{backgroundColor:((O=c.style)==null?void 0:O.backgroundColor)||"inherit"}}}),x=(o.edges||[]).map(c=>({...c}));i(d),u(x),A({x:l,y:p,zoom:F}),o.nodes&&T($(o.nodes)),h&&h.fitView()}else console.warn("Failed to load flow data: Check the flow.json")}catch(t){console.error("Failed to load flow data:",t)}})()},[i,u,A,T,h]);const Q=n.useCallback(s=>u(t=>ce({...s,animated:!0,type:"customEdge"},t)),[u]),X=n.useCallback(()=>{const s=r[r.length-1],t=s?s.position:{x:0,y:0},o={id:V(),position:{x:t.x+100,y:t.y+100},data:{label:`Test Scenario ${r.length+1}`,testCases:[]},sourcePosition:"right",targetPosition:"left",type:"customNode"};i(l=>[...l,o])},[r,i]),Y=n.useCallback(()=>{const s=r[r.length-1],t=s?s.position:{x:0,y:0},o={id:V(),position:{x:t.x+100,y:t.y+100},type:"connector",data:{label:`${r.length+1}`},sourcePosition:"right",targetPosition:"left"};i(l=>[...l,o])},[r,i]),Z=n.useCallback((s,t)=>{N.current?(clearTimeout(N.current),N.current=null,y(!0)):N.current=setTimeout(()=>{N.current=null},200),i(o=>o.map(l=>l.id===t.id?{...l,selected:!0}:{...l,selected:!1})),k(t)},[i]),G=n.useCallback(()=>{y(!1),k(null)},[]),K=n.useCallback((s,t,o)=>{i(l=>{const p=l.map(d=>d.id===a.id?{...d,data:{...d.data,label:t,testCases:s},style:{...d.style,backgroundColor:o||"#1C1C1E"},type:"customNode"}:d),F=$(p);return T(F),p})},[a,i,T]),ee=n.useCallback(async s=>{console.time("Export to Excel");const t=new re.Workbook,o=new Set,l=d=>{const x=d.replace(/[^a-zA-Z0-9_]/g,"_").slice(0,31);let c=x,f=1;for(;o.has(c);)c=`${x}_${f}`,f++,c.length>31&&(c=c.slice(0,31));return o.add(c),c};for(const d of s)if(d.data.testCases&&d.data.testCases.length>0){const x=d.data.label||`Sheet${s.indexOf(d)+1}`,c=l(x),f=d.data.testCases||[];console.log(`Processing node: ${x}`),console.log("Test Cases:",f);const m=t.addWorksheet(c);m.addRow(["Test ID","Test Case","Status"]),f.forEach((w,z)=>{m.addRow([z+1,w.content,w.status,w.description||""])}),(()=>{m.columns.forEach(w=>{let z=0;w.eachCell({includeEmpty:!0},R=>{const _=R.value?R.value.toString().length:0;_>z&&(z=_)}),w.width=z})})(),console.timeEnd(`Creating sheet for ${c}`)}console.timeEnd("Export to Excel");const p=await t.xlsx.writeBuffer(),F=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});ie.saveAs(F,"test_cases.xlsx"),console.log("File saved!")},[]),$=n.useCallback(s=>{const t={total:0,notstarted:0,passed:0,failed:0,blocked:0,notapplicable:0};return s.forEach(o=>{o.data&&o.data.testCases&&o.data.testCases.forEach(l=>{t[l.status]!==void 0&&(t[l.status]+=1)})}),t.total=Object.values(t).reduce((o,l)=>o+l,0),t},[]),te=n.useCallback(()=>{a?(i(s=>s.filter(t=>t.id!==a.id)),u(s=>s.filter(t=>t.source!==a.id&&t.target!==a.id)),C.toastDeleteSuccess(),y(!1),k(null)):C.toastDelete()},[a,i,u,C]),se=n.useCallback(()=>{if(h){const s=h.toObject(),t=$(s.nodes),o=JSON.stringify({...s,testCaseStats:t},null,4);fetch("http://localhost:3000/flow",{method:"POST",headers:{"Content-Type":"application/json"},body:o}).then(l=>l.json()).then(l=>{l&&C.toastSaveSuccess()}).catch(l=>{console.error("Failed to save flow data to server:",l);try{localStorage.setItem("flowData",o),C.toastSaveLocalSuccess()}catch(p){console.error("Failed to save flow data to localStorage:",p),C.toastSaveErrorLocal()}})}else C.toastSaveError()},[h]);return e.jsxs("div",{style:{height:"100vh",width:"100%"},children:[e.jsxs(de,{colorMode:"dark",nodes:r,nodeTypes:W,onNodesChange:S,edges:j,edgeTypes:q,onEdgesChange:b,onConnect:Q,onInit:B,fitView:!0,zoomOnScroll:!1,zoomOnDoubleClick:!1,onNodeClick:Z,children:[e.jsx(ue,{}),e.jsx(he,{}),e.jsx(pe,{}),e.jsxs(xe,{position:"top-left panel",className:"flex flex-col space-y-4",children:[e.jsxs("div",{className:"button-container flex space-x-2",children:[e.jsx("button",{className:"delete p-2 rounded bg-[#3E3E3E] hover:bg-red-600 size-12",onClick:te,children:e.jsx(v,{icon:fe,size:"lg",color:"white"})}),e.jsx("button",{className:"download rounded rounded bg-[#3E3E3E] hover:bg-[#2980B9] size-12",onClick:()=>ee(r),children:e.jsx(v,{icon:Ce,size:"lg",color:"white"})}),e.jsx("button",{className:"add p-2 rounded bg-[#3E3E3E] hover:bg-[#2980B9] size-12",onClick:X,children:e.jsx(v,{icon:be,size:"lg",color:"white"})}),e.jsx("button",{className:"connector p-2 rounded bg-[#3E3E3E] hover:bg-[#2980B9] size-12",onClick:Y,children:e.jsx(v,{icon:ge,size:"lg",color:"white"})}),e.jsx("button",{className:"save p-2 rounded bg-[#3E3E3E] hover:bg-[#2980B9] size-12",onClick:se,children:e.jsx(v,{icon:me,size:"lg",color:"white"})})]}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex justify-between items-center text-sm p-2 bg-[#2d2d2d] opacity-70 rounded text-white",children:[e.jsxs("p",{children:["Total Test Count: ",g.total]}),e.jsx("button",{className:"dropdown-button p-2 rounded bg-[#3E3E3E] hover:bg-[#2980B9] flex items-center",onClick:U,children:e.jsx(v,{icon:we,size:"lg",color:"white"})})]}),H&&e.jsxs("div",{className:"dropdown-menu mt-2 bg-[#2d2d2d] p-2 opacity-70 rounded text-white",children:[e.jsxs("p",{children:["Not Started: ",g.notstarted]}),e.jsxs("p",{children:["Passed: ",g.passed]}),e.jsxs("p",{children:["Failed: ",g.failed]}),e.jsxs("p",{children:["Blocked: ",g.blocked]}),e.jsxs("p",{children:["Not Applicable: ",g.notapplicable]})]})]})]})]}),e.jsx(Ee,{}),e.jsx(ve,{isOpen:P,onClose:G,nodeId:a==null?void 0:a.id,nodeLabel:((L=a==null?void 0:a.data)==null?void 0:L.label)||"",testCases:((M=a==null?void 0:a.data)==null?void 0:M.testCases)||[],onSave:K,borderColor:((I=a==null?void 0:a.data)==null?void 0:I.color)||"#1C1C1E"})]})}export{De as default};
