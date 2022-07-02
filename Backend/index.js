const express = require('express')
const bodyParser= require('body-parser');
const unirest=require('unirest');
const cors=require('cors');
// const request =require('request');
const app= express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
   res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");
   next();
});
app.listen(port,()=>{
    console.log("running");
})
app.post('/login',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTLOGINSK')
    .header({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
        'Context-Type':'application/json'
    })
    .send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_LOGIN_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><I_CUSTID>'+username+'</I_CUSTID><I_PASSWORD>'+password+'</I_PASSWORD></ns0:ZFM_CUST_LOGIN_SK>')   
    .end(function(result){
        if(result.error){
            console.log(result.error);
        }
        else{
            this.res = result.body;
            console.log(this.res);
        }
        res.json(result.body);
        console.log(res);
    } )
})
app.get('/login',(req,res)=>{
    res.send("hii");
})


app.post('/saleorder',(req,res)=>{
    // var customerno=req.body.customerno;
    var customerno = "12";
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTSALESORDERSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_SALESORDER_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><I_CUSID>'+customerno+'</I_CUSID><I_SALESORG>0001</I_SALESORG></ns0:ZFM_CUST_SALESORDER_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


app.post('/delivery',(req,res)=>{
    // var customerno=req.body.customerno;
    var customerno = "12";
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTDELIVERYSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_DELIVERY_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><CUSTID>'+customerno+'</CUSTID></ns0:ZFM_CUST_DELIVERY_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


app.post('/payment',(req,res)=>{

    // var customerno=req.body.customerno;
    var customerno = "12";
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTPAYMENTSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_PAYMENTAGING_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><I_COMCODE>0001</I_COMCODE><I_CUSID>'+customerno+'</I_CUSID><I_DOCDATE></I_DOCDATE><IT_DET><item><COMP_CODE/><CUSTOMER/><SP_GL_IND/><CLEAR_DATE/><CLR_DOC_NO/><ALLOC_NMBR/><FISC_YEAR/><DOC_NO/><ITEM_NUM/><PSTNG_DATE/><DOC_DATE/><ENTRY_DATE/><CURRENCY/><LOC_CURRCY/><REF_DOC_NO/><DOC_TYPE/><FIS_PERIOD/><POST_KEY/><DB_CR_IND/><BUS_AREA/><TAX_CODE/><LC_AMOUNT/><AMT_DOCCUR/><LC_TAX/><TX_DOC_CUR/><ITEM_TEXT/><BRANCH/><BLINE_DATE/><PMNTTRMS/><DSCT_DAYS1/><DSCT_DAYS2/><NETTERMS/><DSCT_PCT1/><DSCT_PCT2/><DISC_BASE/><DSC_AMT_LC/><DSC_AMT_DC/><PYMT_METH/><PMNT_BLOCK/><FIXEDTERMS/><INV_REF/><INV_YEAR/><INV_ITEM/><DUNN_BLOCK/><DUNN_KEY/><LAST_DUNN/><DUNN_LEVEL/><DUNN_AREA/><DOC_STATUS/><NXT_DOCTYP/><VAT_REG_NO/><REASON_CDE/><PMTMTHSUPL/><REF_KEY_1/><REF_KEY_2/><T_CURRENCY/><AMOUNT/><NET_AMOUNT/><NAME/><NAME_2/><NAME_3/><NAME_4/><POSTL_CODE/><CITY/><COUNTRY/><STREET/><PO_BOX/><POBX_PCD/><POBK_CURAC/><BANK_ACCT/><BANK_KEY/><BANK_CTRY/><TAX_NO_1/><TAX_NO_2/><TAX/><EQUAL_TAX/><REGION/><CTRL_KEY/><INSTR_KEY/><PAYEE_CODE/><LANGU/><BILL_LIFE/><BE_TAXCODE/><BILLTAX_LC/><BILLTAX_FC/><LC_COL_CHG/><COLL_CHARG/><CHGS_TX_CD/><ISSUE_DATE/><USAGEDATE/><BILL_USAGE/><DOMICILE/><DRAWER/><CTRBNK_LOC/><DRAW_CITY1/><DRAWEE/><DRAW_CITY2/><DISCT_DAYS/><DISCT_RATE/><ACCEPTED/><BILLSTATUS/><PRTEST_IND/><BE_DEMAND/><OBJ_TYPE/><REF_DOC/><REF_ORG_UN/><REVERSAL_DOC/><SP_GL_TYPE/><NEG_POSTNG/><REF_DOC_NO_LONG/><BILL_DOC/></item></IT_DET></ns0:ZFM_CUST_PAYMENTAGING_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


app.post('/credit',(req,res)=>{
    // var customerno=req.body.customerno;
    var customerno = "12";
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTCREDITMEMOSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?> <ns0:ZFM_CUST_CREDITMEMO_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"> <I_CUSID>'+customerno+'</I_CUSID> <IT_CRE> <item> <KUNNR/> <MATNR/> <WERKS/> <MENGE/> <MEINS/> <BUKRS/> <BELNR/> <GJAHR/> <BUZEI/> <AUGDT/> <KOART/> <DMBTR/> <BDIFF/> <XBILK/> </item> </IT_CRE> <IT_DEB> <item> <KUNNR/> <MATNR/> <WERKS/> <MENGE/> <MEINS/> <BUKRS/> <BELNR/> <GJAHR/> <BUZEI/> <AUGDT/> <KOART/> <DMBTR/> <BDIFF/> <XBILK/> </item> </IT_DEB> </ns0:ZFM_CUST_CREDITMEMO_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})

app.post('/custprofile',(req,res)=>{
    // var customerno=req.body.customerno;
    var customerno = "12";
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTPROFILESK')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_PROFILE_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><I_CUSID>'+customerno+'</I_CUSID></ns0:ZFM_CUST_PROFILE_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})

app.post('/custinvoice',(req,res)=>{
    // var customerno=req.body.customerno;
    var customerno = "12";
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTINVOICESK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_INV_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><CUS_ID>'+customerno+'</CUS_ID><SALES_DOC_NO></SALES_DOC_NO><INV_DET><item><MANDT/><BUKRS/><BELNR/><GJAHR/><BUZEI/><BUZID/><AUGDT/><AUGCP/><AUGBL/><BSCHL/><KOART/><UMSKZ/><UMSKS/><ZUMSK/><SHKZG/><GSBER/><PARGB/><MWSKZ/><QSSKZ/><DMBTR/><WRBTR/><KZBTR/><PSWBT/><PSWSL/><TXBHW/><TXBFW/><MWSTS/><WMWST/><HWBAS/><FWBAS/><HWZUZ/><FWZUZ/><SHZUZ/><STEKZ/><MWART/><TXGRP/><KTOSL/><QSSHB/><KURSR/><GBETR/><BDIFF/><BDIF2/><VALUT/><ZUONR/><SGTXT/><ZINKZ/><VBUND/><BEWAR/><ALTKT/><VORGN/><FDLEV/><FDGRP/><FDWBT/><FDTAG/><FKONT/><KOKRS/><KOSTL/><PROJN/><AUFNR/><VBELN/><VBEL2/><POSN2/><ETEN2/><ANLN1/><ANLN2/><ANBWA/><BZDAT/><PERNR/><XUMSW/><XHRES/><XKRES/><XOPVW/><XCPDD/><XSKST/><XSAUF/><XSPRO/><XSERG/><XFAKT/><XUMAN/><XANET/><XSKRL/><XINVE/><XPANZ/><XAUTO/><XNCOP/><XZAHL/><SAKNR/><HKONT/><KUNNR/><LIFNR/><FILKD/><XBILK/><GVTYP/><HZUON/><ZFBDT/><ZTERM/><ZBD1T/><ZBD2T/><ZBD3T/><ZBD1P/><ZBD2P/><SKFBT/><SKNTO/><WSKTO/><ZLSCH/><ZLSPR/><ZBFIX/><HBKID/><BVTYP/><NEBTR/><MWSK1/><DMBT1/><WRBT1/><MWSK2/><DMBT2/><WRBT2/><MWSK3/><DMBT3/><WRBT3/><REBZG/><REBZJ/><REBZZ/><REBZT/><ZOLLT/><ZOLLD/><LZBKZ/><LANDL/><DIEKZ/><SAMNR/><ABPER/><VRSKZ/><VRSDT/><DISBN/><DISBJ/><DISBZ/><WVERW/><ANFBN/><ANFBJ/><ANFBU/><ANFAE/><BLNBT/><BLNKZ/><BLNPZ/><MSCHL/><MANSP/><MADAT/><MANST/><MABER/><ESRNR/><ESRRE/><ESRPZ/><KLIBT/><QSZNR/><QBSHB/><QSFBT/><NAVHW/><NAVFW/><MATNR/><WERKS/><MENGE/><MEINS/><ERFMG/><ERFME/><BPMNG/><BPRME/><EBELN/><EBELP/><ZEKKN/><ELIKZ/><VPRSV/><PEINH/><BWKEY/><BWTAR/><BUSTW/><REWRT/><REWWR/><BONFB/><BUALT/><PSALT/><NPREI/><TBTKZ/><SPGRP/><SPGRM/><SPGRT/><SPGRG/><SPGRV/><SPGRQ/><STCEG/><EGBLD/><EGLLD/><RSTGR/><RYACQ/><RPACQ/><RDIFF/><RDIF2/><PRCTR/><XHKOM/><VNAME/><RECID/><EGRUP/><VPTNR/><VERTT/><VERTN/><VBEWA/><DEPOT/><TXJCD/><IMKEY/><DABRZ/><POPTS/><FIPOS/><KSTRG/><NPLNR/><AUFPL/><APLZL/><PROJK/><PAOBJNR/><PASUBNR/><SPGRS/><SPGRC/><BTYPE/><ETYPE/><XEGDR/><LNRAN/><HRKFT/><DMBE2/><DMBE3/><DMB21/><DMB22/><DMB23/><DMB31/><DMB32/><DMB33/><MWST2/><MWST3/><NAVH2/><NAVH3/><SKNT2/><SKNT3/><BDIF3/><RDIF3/><HWMET/><GLUPM/><XRAGL/><UZAWE/><LOKKT/><FISTL/><GEBER/><STBUK/><TXBH2/><TXBH3/><PPRCT/><XREF1/><XREF2/><KBLNR/><KBLPOS/><STTAX/><FKBER/><OBZEI/><XNEGP/><RFZEI/><CCBTC/><KKBER/><EMPFB/><XREF3/><DTWS1/><DTWS2/><DTWS3/><DTWS4/><GRICD/><GRIRG/><GITYP/><XPYPR/><KIDNO/><ABSBT/><IDXSP/><LINFV/><KONTT/><KONTL/><TXDAT/><AGZEI/><PYCUR/><PYAMT/><BUPLA/><SECCO/><LSTAR/><CESSION_KZ/><PRZNR/><PPDIFF/><PPDIF2/><PPDIF3/><PENLC1/><PENLC2/><PENLC3/><PENFC/><PENDAYS/><PENRC/><GRANT_NBR/><SCTAX/><FKBER_LONG/><GMVKZ/><SRTYPE/><INTRENO/><MEASURE/><AUGGJ/><PPA_EX_IND/><DOCLN/><SEGMENT/><PSEGMENT/><PFKBER/><HKTID/><KSTAR/><XLGCLR/><TAXPS/><PAYS_PROV/><PAYS_TRAN/><MNDID/><XFRGE_BSEG/><SQUAN/><RE_BUKRS/><RE_ACCOUNT/><PGEBER/><PGRANT_NBR/><BUDGET_PD/><PBUDGET_PD/><J_1TPBUPL/><PEROP_BEG/><PEROP_END/><FASTPAY/><IGNR_IVREF/><FMFGUS_KEY/><FMXDOCNR/><FMXYEAR/><FMXDOCLN/><FMXZEKKN/><PRODPER/><RECRF/></item></INV_DET></ns0:ZFM_CUST_INV_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


app.post('/custinquiry',(req,res)=>{
    var customerno=req.body.customerno;
    // var customerno = "12";
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTINQSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_INQ1_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><CUSID>'+customerno+'</CUSID><INQ_DET><item><VBELN/><ERDAT/><ERNAM/><ANGDT/><BNDDT/><AUDAT/><GUEBG/><GUEEN/><VDATU/><AUTLF/></item></INQ_DET></ns0:ZFM_CUST_INQ1_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


app.post('/custinvoice1',(req,res)=>{
    // var customerno=req.body.customerno;
    var salesno=req.body.salesno;
    var customerno = "12";
    //  var salesno = "0000000014";
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/CUSTINVOICESK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_CUST_INV_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><CUS_ID>'+customerno+'</CUS_ID><SALES_DOC_NO>'+salesno+'</SALES_DOC_NO><INV_DET><item><MANDT/><BUKRS/><BELNR/><GJAHR/><BUZEI/><BUZID/><AUGDT/><AUGCP/><AUGBL/><BSCHL/><KOART/><UMSKZ/><UMSKS/><ZUMSK/><SHKZG/><GSBER/><PARGB/><MWSKZ/><QSSKZ/><DMBTR/><WRBTR/><KZBTR/><PSWBT/><PSWSL/><TXBHW/><TXBFW/><MWSTS/><WMWST/><HWBAS/><FWBAS/><HWZUZ/><FWZUZ/><SHZUZ/><STEKZ/><MWART/><TXGRP/><KTOSL/><QSSHB/><KURSR/><GBETR/><BDIFF/><BDIF2/><VALUT/><ZUONR/><SGTXT/><ZINKZ/><VBUND/><BEWAR/><ALTKT/><VORGN/><FDLEV/><FDGRP/><FDWBT/><FDTAG/><FKONT/><KOKRS/><KOSTL/><PROJN/><AUFNR/><VBELN/><VBEL2/><POSN2/><ETEN2/><ANLN1/><ANLN2/><ANBWA/><BZDAT/><PERNR/><XUMSW/><XHRES/><XKRES/><XOPVW/><XCPDD/><XSKST/><XSAUF/><XSPRO/><XSERG/><XFAKT/><XUMAN/><XANET/><XSKRL/><XINVE/><XPANZ/><XAUTO/><XNCOP/><XZAHL/><SAKNR/><HKONT/><KUNNR/><LIFNR/><FILKD/><XBILK/><GVTYP/><HZUON/><ZFBDT/><ZTERM/><ZBD1T/><ZBD2T/><ZBD3T/><ZBD1P/><ZBD2P/><SKFBT/><SKNTO/><WSKTO/><ZLSCH/><ZLSPR/><ZBFIX/><HBKID/><BVTYP/><NEBTR/><MWSK1/><DMBT1/><WRBT1/><MWSK2/><DMBT2/><WRBT2/><MWSK3/><DMBT3/><WRBT3/><REBZG/><REBZJ/><REBZZ/><REBZT/><ZOLLT/><ZOLLD/><LZBKZ/><LANDL/><DIEKZ/><SAMNR/><ABPER/><VRSKZ/><VRSDT/><DISBN/><DISBJ/><DISBZ/><WVERW/><ANFBN/><ANFBJ/><ANFBU/><ANFAE/><BLNBT/><BLNKZ/><BLNPZ/><MSCHL/><MANSP/><MADAT/><MANST/><MABER/><ESRNR/><ESRRE/><ESRPZ/><KLIBT/><QSZNR/><QBSHB/><QSFBT/><NAVHW/><NAVFW/><MATNR/><WERKS/><MENGE/><MEINS/><ERFMG/><ERFME/><BPMNG/><BPRME/><EBELN/><EBELP/><ZEKKN/><ELIKZ/><VPRSV/><PEINH/><BWKEY/><BWTAR/><BUSTW/><REWRT/><REWWR/><BONFB/><BUALT/><PSALT/><NPREI/><TBTKZ/><SPGRP/><SPGRM/><SPGRT/><SPGRG/><SPGRV/><SPGRQ/><STCEG/><EGBLD/><EGLLD/><RSTGR/><RYACQ/><RPACQ/><RDIFF/><RDIF2/><PRCTR/><XHKOM/><VNAME/><RECID/><EGRUP/><VPTNR/><VERTT/><VERTN/><VBEWA/><DEPOT/><TXJCD/><IMKEY/><DABRZ/><POPTS/><FIPOS/><KSTRG/><NPLNR/><AUFPL/><APLZL/><PROJK/><PAOBJNR/><PASUBNR/><SPGRS/><SPGRC/><BTYPE/><ETYPE/><XEGDR/><LNRAN/><HRKFT/><DMBE2/><DMBE3/><DMB21/><DMB22/><DMB23/><DMB31/><DMB32/><DMB33/><MWST2/><MWST3/><NAVH2/><NAVH3/><SKNT2/><SKNT3/><BDIF3/><RDIF3/><HWMET/><GLUPM/><XRAGL/><UZAWE/><LOKKT/><FISTL/><GEBER/><STBUK/><TXBH2/><TXBH3/><PPRCT/><XREF1/><XREF2/><KBLNR/><KBLPOS/><STTAX/><FKBER/><OBZEI/><XNEGP/><RFZEI/><CCBTC/><KKBER/><EMPFB/><XREF3/><DTWS1/><DTWS2/><DTWS3/><DTWS4/><GRICD/><GRIRG/><GITYP/><XPYPR/><KIDNO/><ABSBT/><IDXSP/><LINFV/><KONTT/><KONTL/><TXDAT/><AGZEI/><PYCUR/><PYAMT/><BUPLA/><SECCO/><LSTAR/><CESSION_KZ/><PRZNR/><PPDIFF/><PPDIF2/><PPDIF3/><PENLC1/><PENLC2/><PENLC3/><PENFC/><PENDAYS/><PENRC/><GRANT_NBR/><SCTAX/><FKBER_LONG/><GMVKZ/><SRTYPE/><INTRENO/><MEASURE/><AUGGJ/><PPA_EX_IND/><DOCLN/><SEGMENT/><PSEGMENT/><PFKBER/><HKTID/><KSTAR/><XLGCLR/><TAXPS/><PAYS_PROV/><PAYS_TRAN/><MNDID/><XFRGE_BSEG/><SQUAN/><RE_BUKRS/><RE_ACCOUNT/><PGEBER/><PGRANT_NBR/><BUDGET_PD/><PBUDGET_PD/><J_1TPBUPL/><PEROP_BEG/><PEROP_END/><FASTPAY/><IGNR_IVREF/><FMFGUS_KEY/><FMXDOCNR/><FMXYEAR/><FMXDOCLN/><FMXZEKKN/><PRODPER/><RECRF/></item></INV_DET></ns0:ZFM_CUST_INV_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})





//Vendor

//vendorlogin
app.post('/vendorlogin',(req,res)=>{
    var vendorid=req.body.vendorid;
    var password=req.body.password;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDLOGINSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_LOGIN_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><PASSWORD>'+password+'</PASSWORD><VENDOR_ID>'+vendorid+'</VENDOR_ID></ns0:ZFM_VENDOR_LOGIN_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})

//VENDORPROFILE

app.post('/vendorprofile',(req,res)=>{
    var vendorid=req.body.vendorid;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDPROFILESK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_PROFILE_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><VENDOR_ID>'+vendorid+'</VENDOR_ID></ns0:ZFM_VENDOR_PROFILE_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})

//purchaseorder

app.post('/purchaseorder',(req,res)=>{
    var vendorid=req.body.vendorid;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDPURCHASESK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_PO_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><VENDOR_ID>'+vendorid+'</VENDOR_ID><IT_FLOW><item><EBELN/><EBELP/><VGABE/><BELNR/><CPUDT/><CPUTM/><BWART/><BEWTP/></item></IT_FLOW><IT_HEADER><item><PO_NUMBER/><CO_CODE/><DOC_CAT/><DOC_TYPE/><CNTRL_IND/><DELETE_IND/><STATUS/><CREATED_ON/><CREATED_BY/><ITEM_INTVL/><LAST_ITEM/><VENDOR/><LANGUAGE/><PMNTTRMS/><DSCNT1_TO/><DSCNT2_TO/><DSCNT3_TO/><CASH_DISC1/><CASH_DISC2/><PURCH_ORG/><PUR_GROUP/><CURRENCY/><EXCH_RATE/><EX_RATE_FX/><DOC_DATE/><VPER_START/><VPER_END/><APPLIC_BY/><QUOT_DEAD/><BINDG_PER/><WARRANTY/><BIDINV_NO/><QUOTATION/><QUOT_DATE/><REF_1/><SALES_PERS/><TELEPHONE/><SUPPL_VEND/><CUSTOMER/><AGREEMENT/><REJ_REASON/><COMPL_DLV/><GR_MESSAGE/><SUPPL_PLNT/><RCVG_VEND/><INCOTERMS1/><INCOTERMS2/><TARGET_VAL/><COLL_NO/><DOC_COND/><PROCEDURE/><UPDATE_GRP/><DIFF_INV/><EXPORT_NO/><OUR_REF/><LOGSYSTEM/><SUBITEMINT/><MAST_COND/><REL_GROUP/><REL_STRAT/><REL_IND/><REL_STATUS/><SUBJ_TO_R/><TAXR_CNTRY/><SCHED_IND/><VEND_NAME/><CURRENCY_ISO/><EXCH_RATE_CM/><HOLD/></item></IT_HEADER><IT_ITEM><item><PO_NUMBER/><PO_ITEM/><DELETE_IND/><STATUS/><CHANGED_ON/><SHORT_TEXT/><MATERIAL/><PUR_MAT/><CO_CODE/><PLANT/><STORE_LOC/><TRACKINGNO/><MAT_GRP/><INFO_REC/><VEND_MAT/><TARGET_QTY/><QUANTITY/><UNIT/><ORDERPR_UN/><CONV_NUM1/><CONV_DEN1/><CONV_NUM2/><CONV_DEN2/><NET_PRICE/><PRICE_UNIT/><NET_VALUE/><GROS_VALUE/><QUOT_DEAD/><GR_PR_TIME/><TAX_CODE/><SETT_GRP1/><QUAL_INSP/><INFO_UPD/><PRNT_PRICE/><EST_PRICE/><NUM_REMIND/><REMINDER1/><REMINDER2/><REMINDER3/><OVERDELTOL/><UNLIMITED/><UNDER_TOL/><VAL_TYPE/><VAL_CAT/><REJ_IND/><COMMENT/><DEL_COMPL/><FINAL_INV/><ITEM_CAT/><ACCTASSCAT/><CONSUMPT/><DISTRIB/><PART_INV/><GR_IND/><GR_NON_VAL/><IR_IND/><GR_BASEDIV/><ACKN_REQD/><ACKNOWL_NO/><AGREEMENT/><AGMT_ITEM/><RECON_DATE/><AGRCUMQTY/><FIRM_ZONE/><TRADE_OFF/><BOM_EXPL/><EXCLUSION/><BASE_UNIT/><SHIPPING/><OUTL_TARGV/><NOND_ITAX/><RELORD_QTY/><PRICE_DATE/><DOC_CAT/><EFF_VALUE/><COMMITMENT/><CUSTOMER/><ADDRESS/><COND_GROUP/><NO_C_DISC/><UPDATE_GRP/><PLAN_DEL/><NET_WEIGHT/><WEIGHTUNIT/><TAX_JUR_CD/><PRINT_REL/><SPEC_STOCK/><SETRESERNO/><SETTLITMNO/><NOT_CHGBL/><CTR_KEY_QM/><CERT_TYPE/><EAN_UPC/><CONF_CTRL/><REV_LEV/><FUND/><FUNDS_CTR/><CMMT_ITEM/><BA_PARTNER/><PTR_ASS_BA/><PROFIT_CTR/><PARTNER_PC/><PRICE_CTR/><GROSS_WGHT/><VOLUME/><VOLUMEUNIT/><INCOTERMS1/><INCOTERMS2/><ADVANCE/><PRIOR_VEND/><SUB_RANGE/><PCKG_NO/><STATISTIC/><HL_ITEM/><GR_TO_DATE/><SUPPL_VEND/><SC_VENDOR/><CONF_MATL/><MAT_CAT/><KANBAN_IND/><ADDRESS2/><INT_OBJ_NO/><ERS/><GRSETTFROM/><LAST_TRANS/><TRANS_TIME/><SER_NO/><PROMOTION/><ALLOC_TBL/><AT_ITEM/><POINTS/><POINTS_UN/><SEASON_TY/><SEASON_YR/><SETT_GRP_2/><SETT_GRP_3/><SETT_ITEM/><ML_AKT/><REMSHLIFE/><RFQ/><RFQ_ITEM/><CONFIG_ORG/><QUOTAUSAGE/><SPSTCK_PHY/><PREQ_NO/><PREQ_ITEM/><MAT_TYPE/><SI_CAT/><SUB_ITEMS/><SUBTOTAL_1/><SUBTOTAL_2/><SUBTOTAL_3/><SUBTOTAL_4/><SUBTOTAL_5/><SUBTOTAL_6/><SUBITM_KEY/><MAX_CMG/><MAX_CPGO/><RET_ITEM/><AT_RELEV/><ORD_REAS/><DEL_TYP_RT/><PRDTE_CTRL/><MANUF_PROF/><MANU_MAT/><MFR_NO/><MFR_NO_EXT/><ITEM_CAT_EXT/><PO_UNIT_ISO/><ORDERPR_UN_ISO/><BASE_UOM_ISO/><WEIGHTUNIT_ISO/><VOLUMEUNIT_ISO/><POINTS_UN_ISO/><CONF_MATL_EXTERNAL/><CONF_MATL_GUID/><CONF_MATL_VERSION/><MATERIAL_EXTERNAL/><MATERIAL_GUID/><MATERIAL_VERSION/><PUR_MAT_EXTERNAL/><PUR_MAT_GUID/><PUR_MAT_VERSION/><GRANT_NBR/><CMMT_ITEM_LONG/><FUNC_AREA_LONG/><BUDGET_PERIOD/><MATERIAL_LONG/><PUR_MAT_LONG/><CONF_MATL_LONG/></item></IT_ITEM></ns0:ZFM_VENDOR_PO_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


//GOODSRECEIPT

app.post('/goodsreceipt',(req,res)=>{
    var vendorid=req.body.vendorid;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDGOODSSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_GR_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><VENDOR_ID>'+vendorid+'</VENDOR_ID><T_GOODS_HEAD><item><MAT_DOC/><DOC_YEAR/><TR_EV_TYPE/><DOC_DATE/><PSTNG_DATE/><ENTRY_DATE/><ENTRY_TIME/><USERNAME/><VER_GR_GI_SLIP/><EXPIMP_NO/><REF_DOC_NO/><HEADER_TXT/><REF_DOC_NO_LONG/></item></T_GOODS_HEAD><T_GOODS_VALUES><item><MAT_DOC/><DOC_YEAR/><MATDOC_ITM/><MATERIAL/><PLANT/><STGE_LOC/><BATCH/><MOVE_TYPE/><STCK_TYPE/><SPEC_STOCK/><VENDOR/><CUSTOMER/><SALES_ORD/><S_ORD_ITEM/><SCHED_LINE/><VAL_TYPE/><ENTRY_QNT/><ENTRY_UOM/><ENTRY_UOM_ISO/><PO_PR_QNT/><ORDERPR_UN/><ORDERPR_UN_ISO/><PO_NUMBER/><PO_ITEM/><SHIPPING/><COMP_SHIP/><NO_MORE_GR/><ITEM_TEXT/><GR_RCPT/><UNLOAD_PT/><COSTCENTER/><ORDERID/><ORDER_ITNO/><CALC_MOTIVE/><ASSET_NO/><SUB_NUMBER/><RESERV_NO/><RES_ITEM/><RES_TYPE/><WITHDRAWN/><MOVE_MAT/><MOVE_PLANT/><MOVE_STLOC/><MOVE_BATCH/><MOVE_VAL_TYPE/><MVT_IND/><MOVE_REAS/><RL_EST_KEY/><REF_DATE/><COST_OBJ/><PROFIT_SEGM_NO/><PROFIT_CTR/><WBS_ELEM/><NETWORK/><ACTIVITY/><PART_ACCT/><AMOUNT_LC/><AMOUNT_SV/><CURRENCY/><CURRENCY_ISO/><REF_DOC_YR/><REF_DOC/><REF_DOC_IT/><EXPIRYDATE/><PROD_DATE/><FUND/><FUNDS_CTR/><CMMT_ITEM/><VAL_SALES_ORD/><VAL_S_ORD_ITEM/><VAL_WBS_ELEM/><CO_BUSPROC/><ACTTYPE/><SUPPL_VEND/><X_AUTO_CRE/><MATERIAL_EXTERNAL/><MATERIAL_GUID/><MATERIAL_VERSION/><MOVE_MAT_EXTERNAL/><MOVE_MAT_GUID/><MOVE_MAT_VERSION/><GRANT_NBR/><CMMT_ITEM_LONG/><FUNC_AREA_LONG/><LINE_ID/><PARENT_ID/><LINE_DEPTH/><BUDGET_PERIOD/><EARMARKED_NUMBER/><EARMARKED_ITEM/><STK_SEGMENT/><MATERIAL_LONG/><MOVE_MAT_LONG/></item></T_GOODS_VALUES><T_OUT><item><TYPE/><ID/><NUMBER/><MESSAGE/><LOG_NO/><LOG_MSG_NO/><MESSAGE_V1/><MESSAGE_V2/><MESSAGE_V3/><MESSAGE_V4/><PARAMETER/><ROW/><FIELD/><SYSTEM/></item></T_OUT></ns0:ZFM_VENDOR_GR_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})

//vendormemo
app.post('/vendormemo',(req,res)=>{
    var vendorid=req.body.vendorid;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDCREDITSK2608')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_CREDEB_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><VENDOR_ID>'+vendorid+'</VENDOR_ID><T_CRE><item><VENDOR/><MATNR/><WERKS/><MENGE/><MEINS/><BUKRS/><BELNR/><GJAHR/><BUZEI/><AUGDT/><KOART/><DMBTR/><BDIFF/><XBILK/></item></T_CRE><T_DEB><item><VENDOR/><MATNR/><WERKS/><MENGE/><MEINS/><BUKRS/><BELNR/><GJAHR/><BUZEI/><AUGDT/><KOART/><DMBTR/><BDIFF/><XBILK/></item></T_DEB></ns0:ZFM_VENDOR_CREDEB_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})

//VENDORPAYMENT

app.post('/vendorpayment',(req,res)=>{
    var vendorid=req.body.vendorid;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDPAYMENTSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_PAYMENT_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><CO_CODE>0001</CO_CODE><FROM_DATE/><TO_DATE/><VENDOR_ID>'+vendorid+'</VENDOR_ID><T_CLOSE><item><COMP_CODE/><VENDOR/><SP_GL_IND/><CLEAR_DATE/><CLR_DOC_NO/><ALLOC_NMBR/><FISC_YEAR/><DOC_NO/><ITEM_NUM/><PSTNG_DATE/><DOC_DATE/><ENTRY_DATE/><CURRENCY/><LOC_CURRCY/><REF_DOC_NO/><DOC_TYPE/><FIS_PERIOD/><POST_KEY/><DB_CR_IND/><BUS_AREA/><TAX_CODE/><LC_AMOUNT/><AMT_DOCCUR/><LC_TAX/><TX_DOC_CUR/><ITEM_TEXT/><BRANCH/><BLINE_DATE/><PMNTTRMS/><DSCT_DAYS1/><DSCT_DAYS2/><NETTERMS/><DSCT_PCT1/><DSCT_PCT2/><DISC_BASE/><DSC_AMT_LC/><DSC_AMT_DC/><PYMT_METH/><PMNT_BLOCK/><FIXEDTERMS/><INV_REF/><INV_YEAR/><INV_ITEM/><DUNN_BLOCK/><DUNN_KEY/><LAST_DUNN/><DUNN_LEVEL/><DUNN_AREA/><W_TAX_CODE/><W_TAX_BASE/><WI_TAX_AMT/><DOC_STATUS/><NXT_DOCTYP/><VAT_REG_NO/><EXEMPT_NO/><W_TAX_EXPT/><REASON_CDE/><PMTMTHSUPL/><REF_KEY_1/><REF_KEY_2/><T_CURRENCY/><AMOUNT/><NET_AMOUNT/><NAME/><NAME_2/><NAME_3/><NAME_4/><POSTL_CODE/><CITY/><COUNTRY/><STREET/><PO_BOX/><POBX_PCD/><POBK_CURAC/><BANK_ACCT/><BANK_KEY/><BANK_CTRY/><TAX_NO_1/><TAX_NO_2/><TAX/><EQUAL_TAX/><REGION/><CTRL_KEY/><INSTR_KEY/><PAYEE_CODE/><LANGU/><BILL_LIFE/><BE_TAXCODE/><BILLTAX_LC/><BILLTAX_FC/><LC_COL_CHG/><COLL_CHARG/><CHGS_TX_CD/><ISSUE_DATE/><USAGEDATE/><BILL_USAGE/><DOMICILE/><DRAWER/><CTRBNK_LOC/><DRAW_CITY1/><DRAWEE/><DRAW_CITY2/><DISCT_DAYS/><DISCT_RATE/><ACCEPTED/><BILLSTATUS/><PRTEST_IND/><BE_DEMAND/><OBJ_TYPE/><REF_DOC/><REF_ORG_UN/><REVERSAL_DOC/><SP_GL_TYPE/><NEG_POSTNG/><REF_DOC_NO_LONG/></item></T_CLOSE><T_OPEN><item><COMP_CODE/><VENDOR/><SP_GL_IND/><CLEAR_DATE/><CLR_DOC_NO/><ALLOC_NMBR/><FISC_YEAR/><DOC_NO/><ITEM_NUM/><PSTNG_DATE/><DOC_DATE/><ENTRY_DATE/><CURRENCY/><LOC_CURRCY/><REF_DOC_NO/><DOC_TYPE/><FIS_PERIOD/><POST_KEY/><DB_CR_IND/><BUS_AREA/><TAX_CODE/><LC_AMOUNT/><AMT_DOCCUR/><LC_TAX/><TX_DOC_CUR/><ITEM_TEXT/><BRANCH/><BLINE_DATE/><PMNTTRMS/><DSCT_DAYS1/><DSCT_DAYS2/><NETTERMS/><DSCT_PCT1/><DSCT_PCT2/><DISC_BASE/><DSC_AMT_LC/><DSC_AMT_DC/><PYMT_METH/><PMNT_BLOCK/><FIXEDTERMS/><INV_REF/><INV_YEAR/><INV_ITEM/><DUNN_BLOCK/><DUNN_KEY/><LAST_DUNN/><DUNN_LEVEL/><DUNN_AREA/><W_TAX_CODE/><W_TAX_BASE/><WI_TAX_AMT/><DOC_STATUS/><NXT_DOCTYP/><VAT_REG_NO/><EXEMPT_NO/><W_TAX_EXPT/><REASON_CDE/><PMTMTHSUPL/><REF_KEY_1/><REF_KEY_2/><T_CURRENCY/><AMOUNT/><NET_AMOUNT/><NAME/><NAME_2/><NAME_3/><NAME_4/><POSTL_CODE/><CITY/><COUNTRY/><STREET/><PO_BOX/><POBX_PCD/><POBK_CURAC/><BANK_ACCT/><BANK_KEY/><BANK_CTRY/><TAX_NO_1/><TAX_NO_2/><TAX/><EQUAL_TAX/><REGION/><CTRL_KEY/><INSTR_KEY/><PAYEE_CODE/><LANGU/><BILL_LIFE/><BE_TAXCODE/><BILLTAX_LC/><BILLTAX_FC/><LC_COL_CHG/><COLL_CHARG/><CHGS_TX_CD/><ISSUE_DATE/><USAGEDATE/><BILL_USAGE/><DOMICILE/><DRAWER/><CTRBNK_LOC/><DRAW_CITY1/><DRAWEE/><DRAW_CITY2/><DISCT_DAYS/><DISCT_RATE/><ACCEPTED/><BILLSTATUS/><PRTEST_IND/><BE_DEMAND/><OBJ_TYPE/><REF_DOC/><REF_ORG_UN/><REVERSAL_DOC/><SP_GL_TYPE/><NEG_POSTNG/><REF_DOC_NO_LONG/></item></T_OPEN></ns0:ZFM_VENDOR_PAYMENT_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})


//VENDORFQ

app.post('/vendorrfq',(req,res)=>{
    // var vendorid=req.body.vendorid;
    var vendorid = "5";
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDRFQSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_RFQ1_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><VENDOR_ID>'+vendorid+'</VENDOR_ID><RFQ_HEAD><item><PO_NUMBER/><CO_CODE/><DOC_CAT/><DOC_TYPE/><CNTRL_IND/><DELETE_IND/><STATUS/><CREATED_ON/><CREATED_BY/><ITEM_INTVL/><LAST_ITEM/><VENDOR/><LANGUAGE/><PMNTTRMS/><DSCNT1_TO/><DSCNT2_TO/><DSCNT3_TO/><CASH_DISC1/><CASH_DISC2/><PURCH_ORG/><PUR_GROUP/><CURRENCY/><EXCH_RATE/><EX_RATE_FX/><DOC_DATE/><VPER_START/><VPER_END/><APPLIC_BY/><QUOT_DEAD/><BINDG_PER/><WARRANTY/><BIDINV_NO/><QUOTATION/><QUOT_DATE/><REF_1/><SALES_PERS/><TELEPHONE/><SUPPL_VEND/><CUSTOMER/><AGREEMENT/><REJ_REASON/><COMPL_DLV/><GR_MESSAGE/><SUPPL_PLNT/><RCVG_VEND/><INCOTERMS1/><INCOTERMS2/><TARGET_VAL/><COLL_NO/><DOC_COND/><PROCEDURE/><UPDATE_GRP/><DIFF_INV/><EXPORT_NO/><OUR_REF/><LOGSYSTEM/><SUBITEMINT/><MAST_COND/><REL_GROUP/><REL_STRAT/><REL_IND/><REL_STATUS/><SUBJ_TO_R/><TAXR_CNTRY/><SCHED_IND/><VEND_NAME/><CURRENCY_ISO/><EXCH_RATE_CM/><HOLD/></item></RFQ_HEAD><RFQ_VALUES><item><PO_NUMBER/><PO_ITEM/><DELETE_IND/><STATUS/><CHANGED_ON/><SHORT_TEXT/><MATERIAL/><PUR_MAT/><CO_CODE/><PLANT/><STORE_LOC/><TRACKINGNO/><MAT_GRP/><INFO_REC/><VEND_MAT/><TARGET_QTY/><QUANTITY/><UNIT/><ORDERPR_UN/><CONV_NUM1/><CONV_DEN1/><CONV_NUM2/><CONV_DEN2/><NET_PRICE/><PRICE_UNIT/><NET_VALUE/><GROS_VALUE/><QUOT_DEAD/><GR_PR_TIME/><TAX_CODE/><SETT_GRP1/><QUAL_INSP/><INFO_UPD/><PRNT_PRICE/><EST_PRICE/><NUM_REMIND/><REMINDER1/><REMINDER2/><REMINDER3/><OVERDELTOL/><UNLIMITED/><UNDER_TOL/><VAL_TYPE/><VAL_CAT/><REJ_IND/><COMMENT/><DEL_COMPL/><FINAL_INV/><ITEM_CAT/><ACCTASSCAT/><CONSUMPT/><DISTRIB/><PART_INV/><GR_IND/><GR_NON_VAL/><IR_IND/><GR_BASEDIV/><ACKN_REQD/><ACKNOWL_NO/><AGREEMENT/><AGMT_ITEM/><RECON_DATE/><AGRCUMQTY/><FIRM_ZONE/><TRADE_OFF/><BOM_EXPL/><EXCLUSION/><BASE_UNIT/><SHIPPING/><OUTL_TARGV/><NOND_ITAX/><RELORD_QTY/><PRICE_DATE/><DOC_CAT/><EFF_VALUE/><COMMITMENT/><CUSTOMER/><ADDRESS/><COND_GROUP/><NO_C_DISC/><UPDATE_GRP/><PLAN_DEL/><NET_WEIGHT/><WEIGHTUNIT/><TAX_JUR_CD/><PRINT_REL/><SPEC_STOCK/><SETRESERNO/><SETTLITMNO/><NOT_CHGBL/><CTR_KEY_QM/><CERT_TYPE/><EAN_UPC/><CONF_CTRL/><REV_LEV/><FUND/><FUNDS_CTR/><CMMT_ITEM/><BA_PARTNER/><PTR_ASS_BA/><PROFIT_CTR/><PARTNER_PC/><PRICE_CTR/><GROSS_WGHT/><VOLUME/><VOLUMEUNIT/><INCOTERMS1/><INCOTERMS2/><ADVANCE/><PRIOR_VEND/><SUB_RANGE/><PCKG_NO/><STATISTIC/><HL_ITEM/><GR_TO_DATE/><SUPPL_VEND/><SC_VENDOR/><CONF_MATL/><MAT_CAT/><KANBAN_IND/><ADDRESS2/><INT_OBJ_NO/><ERS/><GRSETTFROM/><LAST_TRANS/><TRANS_TIME/><SER_NO/><PROMOTION/><ALLOC_TBL/><AT_ITEM/><POINTS/><POINTS_UN/><SEASON_TY/><SEASON_YR/><SETT_GRP_2/><SETT_GRP_3/><SETT_ITEM/><ML_AKT/><REMSHLIFE/><RFQ/><RFQ_ITEM/><CONFIG_ORG/><QUOTAUSAGE/><SPSTCK_PHY/><PREQ_NO/><PREQ_ITEM/><MAT_TYPE/><SI_CAT/><SUB_ITEMS/><SUBTOTAL_1/><SUBTOTAL_2/><SUBTOTAL_3/><SUBTOTAL_4/><SUBTOTAL_5/><SUBTOTAL_6/><SUBITM_KEY/><MAX_CMG/><MAX_CPGO/><RET_ITEM/><AT_RELEV/><ORD_REAS/><DEL_TYP_RT/><PRDTE_CTRL/><MANUF_PROF/><MANU_MAT/><MFR_NO/><MFR_NO_EXT/><ITEM_CAT_EXT/><PO_UNIT_ISO/><ORDERPR_UN_ISO/><BASE_UOM_ISO/><WEIGHTUNIT_ISO/><VOLUMEUNIT_ISO/><POINTS_UN_ISO/><CONF_MATL_EXTERNAL/><CONF_MATL_GUID/><CONF_MATL_VERSION/><MATERIAL_EXTERNAL/><MATERIAL_GUID/><MATERIAL_VERSION/><PUR_MAT_EXTERNAL/><PUR_MAT_GUID/><PUR_MAT_VERSION/><GRANT_NBR/><CMMT_ITEM_LONG/><FUNC_AREA_LONG/><BUDGET_PERIOD/><MATERIAL_LONG/><PUR_MAT_LONG/><CONF_MATL_LONG/></item></RFQ_VALUES></ns0:ZFM_VENDOR_RFQ1_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})

// Vend Invoice List

app.post('/vendorinvlist',(req,res)=>{
    var vendorid=req.body.vendorid;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDINVLISTSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_INV_LIST_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><VENDOR_ID>'+vendorid+'</VENDOR_ID><INV_LIST><item><MANDT/><BELNR/><GJAHR/><BLART/><BLDAT/><BUDAT/><USNAM/><TCODE/><CPUDT/><CPUTM/><VGART/><XBLNR/><BUKRS/><LIFNR/><WAERS/><KURSF/><RMWWR/><BEZNK/><WMWST1/><MWSKZ1/><WMWST2/><MWSKZ2/><ZTERM/><ZBD1T/><ZBD1P/><ZBD2T/><ZBD2P/><ZBD3T/><WSKTO/><XRECH/><BKTXT/><SAPRL/><LOGSYS/><XMWST/><STBLG/><STJAH/><MWSKZ_BNK/><TXJCD_BNK/><IVTYP/><XRBTX/><REPART/><RBSTAT/><KNUMVE/><KNUMVL/><ARKUEN/><ARKUEMW/><MAKZN/><MAKZMW/><LIEFFN/><LIEFFMW/><XAUTAKZ/><ESRNR/><ESRPZ/><ESRRE/><QSSHB/><QSFBT/><QSSKZ/><DIEKZ/><LANDL/><LZBKZ/><TXKRS/><CTXKRS/><EMPFB/><BVTYP/><HBKID/><ZUONR/><ZLSPR/><ZLSCH/><ZFBDT/><KIDNO/><REBZG/><REBZJ/><XINVE/><EGMLD/><XEGDR/><VATDATE/><HKONT/><J_1BNFTYPE/><BRNCH/><ERFPR/><SECCO/><NAME1/><NAME2/><NAME3/><NAME4/><PSTLZ/><ORT01/><LAND1/><STRAS/><PFACH/><PSTL2/><PSKTO/><BANKN/><BANKL/><BANKS/><STCD1/><STCD2/><STKZU/><STKZA/><REGIO/><BKONT/><DTAWS/><DTAMS/><SPRAS/><XCPDK/><EMPFG/><FITYP/><STCDT/><STKZN/><STCD3/><STCD4/><BKREF/><J_1KFREPRE/><J_1KFTBUS/><J_1KFTIND/><ANRED/><STCEG/><ERNAME/><REINDAT/><UZAWE/><FDLEV/><FDTAG/><ZBFIX/><FRGKZ/><ERFNAM/><BUPLA/><FILKD/><GSBER/><LOTKZ/><SGTXT/><INV_TRAN/><PREPAY_STATUS/><PREPAY_AWKEY/><ASSIGN_STATUS/><ASSIGN_NEXT_DATE/><ASSIGN_END_DATE/><COPY_BY_BELNR/><COPY_BY_YEAR/><COPY_TO_BELNR/><COPY_TO_YEAR/><COPY_USER/><KURSX/><WWERT/><XREF3/><J_1TPBUPL/></item></INV_LIST></ns0:ZFM_VENDOR_INV_LIST_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})





// Vend Invoice Detail

app.post('/vendorinvdet',(req,res)=>{
    var vendorid=req.body.vendorid;
var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/VENDINVDETSK26')
.header({
    'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
    'Context-Type':'application/json'
})
.send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_VENDOR_INV_DET_SK xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><INV_NO>'+vendorid+'</INV_NO><INV_DET><item><MANDT/><BELNR/><GJAHR/><BUZEI/><EBELN/><EBELP/><ZEKKN/><MATNR/><BWKEY/><BWTAR/><BUKRS/><WERKS/><WRBTR/><SHKZG/><MWSKZ/><TXJCD/><MENGE/><BSTME/><BPMNG/><BPRME/><LBKUM/><VRKUM/><MEINS/><PSTYP/><KNTTP/><BKLAS/><EREKZ/><EXKBE/><XEKBZ/><TBTKZ/><SPGRP/><SPGRM/><SPGRT/><SPGRG/><SPGRV/><SPGRQ/><SPGRS/><SPGRC/><SPGREXT/><BUSTW/><XBLNR/><XRUEB/><BNKAN/><KSCHL/><SALK3/><VMSAL/><XLIFO/><LFBNR/><LFGJA/><LFPOS/><MATBF/><RBMNG/><BPRBM/><RBWWR/><LFEHL/><GRICD/><GRIRG/><GITYP/><PACKNO/><INTROW/><SGTXT/><XSKRL/><KZMEK/><MRMOK/><STUNR/><ZAEHK/><STOCK_POSTING/><STOCK_POSTING_PP/><STOCK_POSTING_PY/><WEREC/><LIFNR/><FRBNR/><XHISTMA/><COMPLAINT_REASON/><RETAMT_FC/><RETPC/><RETDUEDT/><XRETTAXNET/><RE_ACCOUNT/><ERP_CONTRACT_ID/><ERP_CONTRACT_ITM/><SRM_CONTRACT_ID/><SRM_CONTRACT_ITM/><CONT_PSTYP/><SRVMAPKEY/><CHARG/><INV_ITM_ORIGIN/><INVREL/><XDINV/><DIFF_AMOUNT/><XCPRF/><FSH_SEASON_YEAR/><FSH_SEASON/><FSH_COLLECTION/><FSH_THEME/><LICNO/><ZEILE/><SGT_SCAT/><WRF_CHARSTC1/><WRF_CHARSTC2/><WRF_CHARSTC3/></item></INV_DET></ns0:ZFM_VENDOR_INV_DET_SK>')   
.end(function(result){
    if(result.error){
        console.log(result.error);
    }
    else{
        this.res = result.body;
        console.log(this.res);
    }
    res.json(result.body);
    console.log(res);
} )

})

//Employee Portal

//ELOGIN

app.post('/elogin',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eplogin396')
    .header({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
        'Context-Type':'application/json'
    })
    .send('<?xml version="1.0" encoding="UTF-8"?> <ns0:ZFM_LOGIN_EP_SAN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><PASSWORD>'+ username +'</PASSWORD><UID>'+ password+'</UID><PROFILE_DET><item><COMP_CODE/><COMP_NAME/><CITY/><COUNTRY/><CURRENCY/><LANGU/><CHRT_ACCTS/><FY_VARIANT/><VAT_REG_NO/><COMPANY/><ADDR_NO/><COUNTRY_ISO/><CURRENCY_ISO/><LANGU_ISO/></item></PROFILE_DET></ns0:ZFM_LOGIN_EP_SAN>')   
    .end(function(result){
        if(result.error){
            console.log(result.error);
        }
        else{
            this.res = result.body;
            console.log(this.res);
        }
        res.json(result.body);
        console.log(res);
    } )
})
app.get('/login',(req,res)=>{
    res.send("hi")
})


//EPROFILE

app.post('/eprofile',(req,res)=>{
    var customerno = req.body.empid;
    // var password = req.body.password;
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/epprofile396')
    .header({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
        'Context-Type':'application/json'
    })
    .send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_PROFILE_EP_SAN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><EMPID>'+customerno+'</EMPID><COMPANY><item><COMP_CODE/><COMP_NAME/><CITY/><COUNTRY/><CURRENCY/><LANGU/><CHRT_ACCTS/><FY_VARIANT/><VAT_REG_NO/><COMPANY/><ADDR_NO/><COUNTRY_ISO/><CURRENCY_ISO/><LANGU_ISO/></item></COMPANY><COMPANY_ADDRESS><item><ADDR_NO/><FORMOFADDR/><NAME/><NAME_2/><NAME_3/><NAME_4/><C_O_NAME/><CITY/><DISTRICT/><CITY_NO/><POSTL_COD1/><POSTL_COD2/><POSTL_COD3/><PO_BOX/><PO_BOX_CIT/><DELIV_DIS/><STREET/><STREET_NO/><STR_ABBR/><HOUSE_NO/><STR_SUPPL1/><STR_SUPPL2/><LOCATION/><BUILDING/><FLOOR/><ROOM_NO/><COUNTRY/><LANGU/><REGION/><SORT1/><SORT2/><TIME_ZONE/><TAXJURCODE/><ADR_NOTES/><COMM_TYPE/><TEL1_NUMBR/><TEL1_EXT/><FAX_NUMBER/><FAX_EXTENS/></item></COMPANY_ADDRESS></ns0:ZFM_PROFILE_EP_SAN>')   
    .end(function(result){
        if(result.error){
            console.log(result.error);
        }
        else{
            this.res = result.body;
            console.log(this.res);
        }
        res.json(result.body);
        console.log(res);

    } )
})

//LEAVE

app.post('/eleave',(req,res)=>{
    var customerno = req.body.vendorid;
    // var password = req.body.password;
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/epleave396')
    .header({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
        'Context-Type':'application/json'
    })
    .send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_LEAVE_EP_SAN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><EMPID>'+ customerno +'</EMPID><IT_LEAVE_BALANCE><item><QUOTATYPE/><LEAVETYPE/><QUOTATEXT/><QUOTAEND/><QUOTABEG/><ENTITLE/><DEDUCT/><ORDERED/><QUOTANUM/><TIME_UNIT/><TIUNITEXT/></item></IT_LEAVE_BALANCE><IT_LEAVE_DETAIL><item><EMPLOYEENO/><SUBTYPE/><OBJECTID/><LOCKINDIC/><VALIDEND/><VALIDBEGIN/><RECORDNR/><START/><END/><ABSENCETYPE/><NAMEOFABSENCETYPE/><ABSENCEDAYS/><ABSENCEHOURS/></item></IT_LEAVE_DETAIL><IT_LEAVE_TYPE><item><MANDT/><SPRSL/><MOABW/><AWART/><ATEXT/></item></IT_LEAVE_TYPE></ns0:ZFM_LEAVE_EP_SAN>')   
    .end(function(result){
        if(result.error){
            console.log(result.error);
        }
        else{
            this.res = result.body;
            console.log(this.res);
        }
        res.json(result.body);
        console.log(res);

    } )
})


//paydet

app.post('/epaydet',(req,res)=>{
    var invoiceno = req.body.invoiceno;
    // var password = req.body.password;
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eppsdet396')
    .header({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
        'Context-Type':'application/json'
    })
    .send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_PSDET_EP_SAN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><EMPID>'+invoiceno+'</EMPID><PAYSLIP_DET><item><SEQUENCENUMBER/><FPPERIOD/><FPBEGIN/><FPEND/><BONUSDATE/><PAYDATE/><PAYTYPE/><PAYID/><OCREASON/><PAYTYPE_TEXT/><OCREASON_TEXT/></item></PAYSLIP_DET></ns0:ZFM_PSDET_EP_SAN>')   
    .end(function(result){
        if(result.error){
            console.log(result.error);
        }
        else{
            this.res = result.body;
            console.log(this.res);
        }
        res.json(result.body);
        console.log(res);

    } )
})

//paypdf

app.post('/epaypdf',(req,res)=>{
    var empId = req.body.empId;
     var seqnumber = req.body.seqnumber;
    var req = unirest('GET','http://dxktpipo.kaarcloud.com:50000/RESTAdapter/eppspdf396')
    .header({
        'Authorization':'Basic UE9VU0VSQDE6VGVjaEAyMDIy',
        'Context-Type':'application/json'
    })
    .send('<?xml version="1.0" encoding="UTF-8"?><ns0:ZFM_PSPDF_EP_SAN xmlns:ns0="urn:sap-com:document:sap:rfc:functions"><EMPID>'+empId+'</EMPID><SEQNO>'+seqnumber+'</SEQNO><PAYSLIP_HTML><item><LINE/></item></PAYSLIP_HTML><PAYSLIP_TAB><item><FORMAT_COL/><TEXT_COL/></item></PAYSLIP_TAB></ns0:ZFM_PSPDF_EP_SAN>')   
    .end(function(result){
        if(result.error){
            console.log(result.error);
        }
        else{
            this.res = result.body;
            console.log(this.res);
        }
        res.json(result.body);
        console.log(res);

    } )
})

