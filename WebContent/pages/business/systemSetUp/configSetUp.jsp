<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/base/base.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang='zh'>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/common/form-style/css/demo.css" />
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/common/form-style/css/style3.css" />
<script type="text/javascript" src="<%=contextPath%>/common/form-style/js/modernizr.custom.04022.js"></script>
<script src="<%=contextPath%>/pages/business/systemSetUp/js/configSetUp.js" type="text/javascript"></script>
<style type="text/css">
table.contacts { 
	width: 100%;
	background-color: #fafafa;
	border: 0px #000000 solid;
	border-collapse: collapse;
	border-spacing: 0px; 
	height: inherit;
}

td.contact { 
	border-bottom: 1px #6699CC dotted;
	text-align: left;
	font-family: Verdana, sans-serif, Arial;
	font-weight: normal;
	font-size: .7em;
	color: #404040;
	background-color: #fafafa;
	padding-top: 4px;
	padding-bottom: 4px;
	padding-left: 8px;
	padding-right: 0px; 
}

.contactinput:hover {
  background: #e6e6e6;
}

/* after checked */
[type="checkbox"]:not(:checked),[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: '';
  position: absolute;
  left:0; top: 2px;
  width: 14px; height: 14px;
  border: 1px solid #aaa;
  background: #f8f8f8;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.3)
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: '✔';
  position: absolute;
  top: 0; left: 4px;
  font-size: 12px;
  color: #D7520C;
  transition: all 0.1s cubic-bezier(1,.18,.01,.39) 0s;
  margin: 2px 0px;
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}
/* disabled checkbox */
[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #ddd;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #999;
}
[type="checkbox"]:disabled + label {
  color: #aaa;
}
/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 1px dotted blue;
}

/* hover style just for information */
label:hover:before {
  border: 1px solid #4778d9!important;
}
</style>
<script type="text/javascript">
</script>

</head>
<body style="overflow-y: hidden;background: #f2f2f2;">
	<div style="margin: 0px;background: #f2f2f2;">
       	&nbsp;&nbsp;用户信息：<input id="queryParams" name="queryParams" class="inputQueryEle" placeholder="登陆名">
	</div>
	<table id="configGrid" style="height: auto;"></table>
    <div id="addConfig" class="container" style="min-height: 300px;overflow:hidden;">
			<section class="af-wrapper">
	            <h1></h1>
	            <label for="af-showreq" class="af-show" style="margin: -15px 40px;">*突出必填项</label>
				<input id="af-showreq" class="af-show-input" type="checkbox" name="showreq"/>
				<input type="hidden" name="userId" id="userId">
				<form class="af-form" id="af-form" novalidate style="margin: 16px -15px;">
					<div class="af-outer af-required">
						<div class="af-inner">
						  <label for="shopCodeList">所属网点 :</label>
						  <input id="shopCodeList" class="easyui-combobox" name="shopCodeList" data-options="
								                url: '<%=contextPath%>/pages/system/getShopInfoForSelect.light',
								                method: 'get',
								                valueField: 'id',
								                textField: 'text',
								                panelWitdh: 380,
								                panelHeight: 260,
								                width:280,
								                height: 35,
								                formatter: formatItem" />
						</div>
					</div>
					<div class="af-outer af-required">
						<div class="af-inner">
							<label for="shopName">参数名:</label>
							<input type="text" name="loginName" id="loginName" style="width: 279px;">
						</div>
					</div>
					<div class="af-outer">
						<div class="af-inner">
							<label for="shopCode">值:</label>
							<input type="text" name="nickName" id="nickName" style="width: 279px;">
						</div>
					</div>
					<div class="af-outer af-required">
						<div class="af-inner">
						  <label for="isCheck">是否启用:</label>
						  <input type="checkbox" name="isCheck" value="YES" id="isCheck"/>
						  <label for="isCheck" style="margin: 8px 15px; font-size:12px;"></label>
						</div>
					</div>
				</form>
				<div style="text-align:center;">
				  	<input id="saveBtn" type="button" value="保存" style="height: 30px;width: 49px;"/>
					<input id="cancelBtn" type="button" value="关闭" style="height: 30px;width: 49px;"/>
				</div>
			</section>
        </div>
	<!-- 条码显示 -->
    <div id="imgDetail" class="easyui-dialog" title="Complex Toolbar on Dialog" style="width:400px;height:200px;padding:10px;"
            data-options="buttons: '#dlg-buttons',closed: true">
            <div style="margin: 20px 30px;">
            	<img id="barimg" src=""></img>
                <span id="fileName" style="margin: 0px 80px;font-weight: 300;font-size: 18px;"></span>
            </div>
                
    </div>
    <div id="dlg-buttons">
        <a id="submitBtn" class="easyui-linkbutton">打印条码</a>
        <a id="close" class="easyui-linkbutton" onclick="javascript:$('#imgDetail').dialog('close')">Close</a>
    </div>
    
    <!-- 显示签名 -->
    <div id="signatureDetail" class="easyui-dialog" title="Complex Toolbar on Dialog" style="width:600px;height:430px;padding:10px;overflow: hidden;"
            data-options="buttons: '#dlg-buttons',closed: true">
            <div style="margin: 8px 5px;">
            	<img id="signatureImg" src=""></img>
                <span id="fileName" style="margin: 0px 80px;font-weight: 300;font-size: 18px;"></span>
            </div>
                
    </div>
    <div id="dlg-buttons">
        <a id="submitBtn" class="easyui-linkbutton">打印签名</a>
        <a id="close" class="easyui-linkbutton" onclick="javascript:$('#signatureDetail').dialog('close')">Close</a>
    </div>
</body>
</html>