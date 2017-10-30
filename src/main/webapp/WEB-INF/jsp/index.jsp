<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="/js/api/echarts.min.js"></script>
    <script src="http://api.map.baidu.com/api?v=2.0&ak=uHkkRqHOFj3Z6Ajv3lLhCD8WjYjb6rFM"></script>
    <script src="/js/api/bmap.min.js"></script>
    <script src="/js/api/china.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 1000px;height:800px;"></div>

	<input id="text" type="text" />
	<button onclick="send()">Send</button>
	<button onclick="closeWebSocket()">Close</button>
	<div id="message"></div>
	
	<script src="/js/randomLinesNomiss.js"></script>
</body>
</html>