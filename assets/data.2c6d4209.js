import{x as e}from"./index.692aac4b.js";const{utils:t,writeFile:a}=e;function s({data:e,header:s,filename:n="excel-list.xlsx",json2sheetOpts:i={},write2excelOpts:o={bookType:"xlsx"}}){const d=[...e];s&&(d.unshift(s),i.skipHeader=!0);const l=t.json_to_sheet(d,i);a({SheetNames:[n],Sheets:{[n]:l}},n,o)}function n({data:e,header:s,filename:n="excel-list.xlsx",write2excelOpts:i={bookType:"xlsx"}}){const o=[...e];s&&o.unshift(s);const d=t.aoa_to_sheet(o);a({SheetNames:[n],Sheets:{[n]:d}},n,i)}const i=[{title:"ID",dataIndex:"id",width:80},{title:"姓名",dataIndex:"name",width:120},{title:"年龄",dataIndex:"age",width:80},{title:"编号",dataIndex:"no",width:80},{title:"地址",dataIndex:"address"},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}],o=(()=>{const e=[];for(let t=0;t<40;t++)e.push({id:`${t}`,name:`${t} John Brown`,age:`${t+10}`,no:`${t}98678`,address:"New York No. 1 Lake ParkNew York No. 1 Lake Park",beginTime:(new Date).toLocaleString(),endTime:(new Date).toLocaleString()});return e})(),d=i.map((e=>e.title)),l=o.map((e=>Object.keys(e).map((t=>e[t]))));export{n as a,l as b,i as c,o as d,d as e,s as j};
