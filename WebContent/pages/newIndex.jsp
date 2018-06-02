<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="/base/base.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang='zh'>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Root - Bootstrap 4 Admin Template">
    <meta name="author" content="Åukasz Holeczek">
    <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,AngularJS,Angular,Angular2,jQuery,CSS,HTML,RWD,Dashboard">
    <link rel="shortcut icon" href="<%=contextPath%>/bootstrapBoot/img/favicon.png">
    <title>源信幸福快递-登陆</title>
    <!-- Icons -->
    <link href="<%=contextPath%>/bootstrapBoot/css/font-awesome.min.css" rel="stylesheet">
    <link href="<%=contextPath%>/bootstrapBoot/css/simple-line-icons.css" rel="stylesheet">

    <!-- Premium Icons -->
    <link href="<%=contextPath%>/bootstrapBoot/css/glyphicons.css" rel="stylesheet">
    <link href="<%=contextPath%>/bootstrapBoot/css/glyphicons-filetypes.css" rel="stylesheet">
    <link href="<%=contextPath%>/bootstrapBoot/css/glyphicons-social.css" rel="stylesheet">

    <!-- Main styles for this application -->
    <link href="<%=contextPath%>/bootstrapBoot/css/style.css" rel="stylesheet">
	<script type="text/javascript" src="<%=contextPath%>/pages/js/index.js"></script>
</head>

<body class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
    <header class="app-header navbar">
        <button class="navbar-toggler mobile-sidebar-toggler hidden-lg-up" type="button">☰</button>
        <a class="navbar-brand" href="#"></a>
        <ul class="nav navbar-nav hidden-md-down">
            <li class="nav-item">
                <a class="nav-link navbar-toggler sidebar-toggler" href="#">☰</a>
            </li>

<!--             <li class="nav-item px-1"> -->
<!--                 <a class="nav-link" href="#">Dashboard</a> -->
<!--             </li> -->
<!--             <li class="nav-item px-1"> -->
<!--                 <a class="nav-link" href="#">Users</a> -->
<!--             </li> -->
<!--             <li class="nav-item px-1"> -->
<!--                 <a class="nav-link" href="#">Settings</a> -->
<!--             </li> -->
        </ul>
        <ul class="nav navbar-nav ml-auto">
            <li class="nav-item dropdown hidden-md-down">
                <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="icon-bell"></i>
                    <span class="badge badge-pill badge-danger">5</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">

                    <div class="dropdown-header text-center">
                        <strong>You have 5 notifications</strong>
                    </div>

                    <a href="#" class="dropdown-item">
                        <i class="icon-user-follow text-success"></i> New user registered
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="icon-user-unfollow text-danger"></i> User deleted
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="icon-chart text-info"></i> Sales report is ready
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="icon-basket-loaded text-primary"></i> New client
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="icon-speedometer text-warning"></i> Server overloaded
                    </a>

                    <div class="dropdown-header text-center">
                        <strong>Server</strong>
                    </div>

                    <a href="#" class="dropdown-item">
                        <div class="text-uppercase mb-q">
                            <small><b>CPU Usage</b>
                            </small>
                        </div>
                        <span class="progress progress-xs">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                        <small class="text-muted">348 Processes. 1/4 Cores.</small>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="text-uppercase mb-q">
                            <small><b>Memory Usage</b>
                            </small>
                        </div>
                        <span class="progress progress-xs">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                        <small class="text-muted">11444GB/16384MB</small>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="text-uppercase mb-q">
                            <small><b>SSD 1 Usage</b>
                            </small>
                        </div>
                        <span class="progress progress-xs">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                        <small class="text-muted">243GB/256GB</small>
                    </a>

                </div>
            </li>
            <li class="nav-item dropdown hidden-md-down">
                <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="icon-list"></i>
                    <span class="badge badge-pill badge-warning">15</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">

                    <div class="dropdown-header text-center">
                        <strong>You have 5 pending tasks</strong>
                    </div>

                    <a href="#" class="dropdown-item">
                        <div class="small mb-q">Upgrade NPM &amp; Bower
                            <span class="float-right">
                                <strong>0%</strong>
                            </span>
                        </div>
                        <span class="progress progress-xs">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="small mb-q">ReactJS Version
                            <span class="float-right">
                                <strong>25%</strong>
                            </span>
                        </div>
                        <span class="progress progress-xs">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="small mb-q">VueJS Version
                            <span class="float-right">
                                <strong>50%</strong>
                            </span>
                        </div>
                        <span class="progress progress-xs">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="small mb-q">Add new layouts
                            <span class="float-right">
                                <strong>75%</strong>
                            </span>
                        </div>
                        <span class="progress progress-xs">
                            <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="small mb-q">Angular 2 Cli Version
                            <span class="float-right">
                                <strong>100%</strong>
                            </span>
                        </div>
                        <span class="progress progress-xs">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </span>
                    </a>

                    <a href="#" class="dropdown-item text-center">
                        <strong>View all tasks</strong>
                    </a>
                </div>
            </li>
            <li class="nav-item dropdown hidden-md-down">
                <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="icon-envelope-letter"></i>
                    <span class="badge badge-pill badge-info">7</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">

                    <div class="dropdown-header text-center">
                        <strong>You have 4 messages</strong>
                    </div>

                    <a href="#" class="dropdown-item">
                        <div class="message">
                            <div class="py-1 mr-1 float-left">
                                <div class="avatar">
                                    <img src="<%=contextPath%>/bootstrapBoot/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                    <span class="avatar-status badge-success"></span>
                                </div>
                            </div>
                            <div>
                                <small class="text-muted">John Doe</small>
                                <small class="text-muted float-right mt-q">Just now</small>
                            </div>
                            <div class="text-truncate font-weight-bold">
                                <span class="fa fa-exclamation text-danger"></span>Important message</div>
                            <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="message">
                            <div class="py-1 mr-1 float-left">
                                <div class="avatar">
                                    <img src="<%=contextPath%>/bootstrapBoot/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                    <span class="avatar-status badge-warning"></span>
                                </div>
                            </div>
                            <div>
                                <small class="text-muted">John Doe</small>
                                <small class="text-muted float-right mt-q">5 minutes ago</small>
                            </div>
                            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                            <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="message">
                            <div class="py-1 mr-1 float-left">
                                <div class="avatar">
                                    <img src="<%=contextPath%>/bootstrapBoot/img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                    <span class="avatar-status badge-danger"></span>
                                </div>
                            </div>
                            <div>
                                <small class="text-muted">John Doe</small>
                                <small class="text-muted float-right mt-q">1:52 PM</small>
                            </div>
                            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                            <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
                        </div>
                    </a>
                    <a href="#" class="dropdown-item">
                        <div class="message">
                            <div class="py-1 mr-1 float-left">
                                <div class="avatar">
                                    <img src="<%=contextPath%>/bootstrapBoot/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                    <span class="avatar-status badge-info"></span>
                                </div>
                            </div>
                            <div>
                                <small class="text-muted">John Doe</small>
                                <small class="text-muted float-right mt-q">4:03 PM</small>
                            </div>
                            <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                            <div class="small text-muted text-truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</div>
                        </div>
                    </a>

                    <a href="#" class="dropdown-item text-center">
                        <strong>View all messages</strong>
                    </a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    <img src="<%=contextPath%>/bootstrapBoot/img/avatars/3.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                    <span class="hidden-md-down">东欣彩虹城</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-header text-center">
                        <strong>Account</strong>
                    </div>
                    <a class="dropdown-item" href="#"><i class="fa fa-bell-o"></i> Updates<span class="badge badge-info">42</span></a>
                    <a class="dropdown-item" href="#"><i class="fa fa-envelope-o"></i> Messages<span class="badge badge-success">42</span></a>
                    <a class="dropdown-item" href="#"><i class="fa fa-tasks"></i> Tasks<span class="badge badge-danger">42</span></a>
                    <a class="dropdown-item" href="#"><i class="fa fa-comments"></i> Comments<span class="badge badge-warning">42</span></a>
                    <div class="dropdown-header text-center">
                        <strong>Settings</strong>
                    </div>

                    <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Profile</a>
                    <a class="dropdown-item" href="#"><i class="fa fa-wrench"></i> Settings</a>
                    <a class="dropdown-item" href="#"><i class="fa fa-usd"></i> Payments<span class="badge badge-default">42</span></a>
                    <a class="dropdown-item" href="#"><i class="fa fa-file"></i> Projects<span class="badge badge-primary">42</span></a>
                    <div class="divider"></div>
                    <a class="dropdown-item" href="#"><i class="fa fa-shield"></i> Lock Account</a>
                    <a class="dropdown-item" href="#"><i class="fa fa-lock"></i> Logout</a>
                </div>
            </li>
            <li class="nav-item hidden-md-down">
                <a class="nav-link navbar-toggler aside-menu-toggler" href="#">☰</a>
            </li>

        </ul>
    </header>

    <div class="app-body">
        <div class="sidebar">
            <nav class="sidebar-nav">
                <ul class="nav">
                    <li class="divider"></li>
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-note"></i> 客户管理</a>
                        <ul class="nav-dropdown-items">
                            <li class="nav-item">
                                <a class="nav-link" href="forms-basic-forms.html"><i class="icon-note"></i> Basic Forms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="forms-advanced-forms.html"><i class="icon-note"></i> Advanced Forms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="forms-validation.html"><i class="icon-note"></i> Validation</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-note"></i> 客户管理</a>
                        <ul class="nav-dropdown-items">
                            <li class="nav-item">
                                <a class="nav-link" href="forms-basic-forms.html"><i class="icon-note"></i> Basic Forms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="forms-advanced-forms.html"><i class="icon-note"></i> Advanced Forms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="forms-validation.html"><i class="icon-note"></i> Validation</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-star"></i> 统计分析</a>
                        <ul class="nav-dropdown-items">
                            <li class="nav-item">
                                <a class="nav-link" href="icons-font-awesome.html"><i class="icon-star"></i> Font Awesome</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="icons-simple-line-icons.html"><i class="icon-star"></i> Simple Line Icons</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="icons-glyphicons.html"><i class="icon-star"></i> Glyphicons</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="icons-glyphicons-filetypes.html"><i class="icon-star"></i> Filetypes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="icons-glyphicons-social.html"><i class="icon-star"></i> Glyphicons Social</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-energy"></i> 系统管理</a>
                        <ul class="nav-dropdown-items">
                            <li class="nav-item">
                                <a class="nav-link" href="plugins-calendar.html"><i class="icon-calendar"></i> Calendar</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="plugins-draggable-cards.html"><i class="icon-cursor-move"></i> Draggable Cards</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="plugins-loading-buttons.html"><i class="icon-cursor"></i> Loading Buttons</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="plugins-notifications.html"><i class="icon-info"></i> Notifications</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="plugins-sliders.html"><i class="icon-equalizer"></i> Sliders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="plugins-spinners.html"><i class="fa fa-spinner"></i> Spinners</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="plugins-tables.html"><i class="icon-list"></i> Tables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="widgets.html"><i class="icon-calculator"></i> 区域管理 <span class="badge badge-info">NEW</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="charts.html"><i class="icon-pie-chart"></i> 系统管理</a>
                    </li>
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-star"></i> 基础管理</a>
                        <ul class="nav-dropdown-items">
                            <li class="nav-item">
                                <a class="nav-link" href="pages-login.html" target="_top"><i class="icon-star"></i> Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pages-register.html" target="_top"><i class="icon-star"></i> Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pages-404.html" target="_top"><i class="icon-star"></i> Error 404</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pages-500.html" target="_top"><i class="icon-star"></i> Error 500</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item nav-dropdown">
                        <a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-layers"></i> 用户管理</a>

                        <ul class="nav-dropdown-items">
                            <li class="nav-item nav-dropdown">
                                <a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-speech"></i> Invoicing</a>
                                <ul class="nav-dropdown-items">
                                    <li class="nav-item">
                                        <a class="nav-link" href="UIkits-invoicing-invoice.html"><i class="icon-speech"></i> Invoice</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav-dropdown-items">
                            <li class="nav-item nav-dropdown">
                                <a class="nav-link nav-dropdown-toggle" href="#"><i class="icon-speech"></i> Email</a>
                                <ul class="nav-dropdown-items">
                                    <li class="nav-item">
                                        <a class="nav-link" href="UIkits-email-inbox.html"><i class="icon-speech"></i> Inbox</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="UIkits-email-message.html"><i class="icon-speech"></i> Message</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="UIkits-email-compose.html"><i class="icon-speech"></i> Compose</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="charts.html"><i class="icon-pie-chart"></i> 支付管理</a>
                    </li>
                    <li class="divider m-h"></li>
                    <li class="nav-title">
                        Labels
                    </li>
                    <li class="nav-item hidden-cn">
                        <a class="nav-label" href="#"><i class="fa fa-circle text-danger"></i> Label danger</a>
                    </li>
                    <li class="nav-item hidden-cn">
                        <a class="nav-label" href="#"><i class="fa fa-circle text-info"></i> Label info</a>
                    </li>
                    <li class="nav-item hidden-cn">
                        <a class="nav-label" href="#"><i class="fa fa-circle text-warning"></i> Label warning</a>
                    </li>
                    <li class="nav-item hidden-cn">
                        <a class="nav-label" href="#"><i class="fa fa-circle text-info"></i> Label warning</a>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Main content -->
        <main class="main">
            <!-- Page Header -->
<!--             <div class="page-header"> -->
<!--                 <div class="container-fluid"> -->
<!--                     <div class="row"> -->

<!--                         <div class="col-md-5 charts"> -->
<!--                             <div class="row"> -->
<!--                                 <div class="col-6 col-sm-4"> -->
<!--                                     <div class="text-center title"> -->
<!--                                         <span class="text-muted">当天收件:</span> -->
<!--                                         <strong>189 件</strong> -->
<!--                                     </div> -->
<!--                                 </div> -->
<!--                                 <div class="col-6 col-sm-4"> -->
<!--                                     <div class="text-center title"> -->
<!--                                         <span class="text-muted">当天寄件:</span> -->
<!--                                         <strong class="text-danger">28 件</strong> -->
<!--                                     </div> -->
<!--                                 </div> -->
<!--                                 <div class="col-6 col-sm-4"> -->
<!--                                     <div class="text-center title"> -->
<!--                                         <span class="text-muted">累计未取件:</span> -->
<!--                                         <strong class="text-success">225</strong> -->
<!--                                     </div> -->
<!--                                 </div> -->
<!--                             </div> -->
<!--                         </div> -->
<!--                     </div> -->
<!--                 </div> -->
<!--             </div> -->
<!--             <div class="container-fluid"> -->
<!--                 <div class="animated fadeIn"></div> -->
<!--             </div> -->
            <div id="tabs" class="easyui-tabs">
				<div title="特别说明" style="padding:10px">
					<div style="margin: 5px 5px;">你好：${nickName} [${userMode}]</div>
				</div>
			</div>
            <!-- /.conainer-fluid -->
        </main>
        <aside class="aside-menu">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#timeline" role="tab"><i class="icon-list"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#messages" role="tab"><i class="icon-speech"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#settings" role="tab"><i class="icon-settings"></i></a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="timeline" role="tabpanel">
                    <div class="callout m-0 py-h text-muted text-center bg-faded text-uppercase">
                        <small><b>Today</b>
                        </small>
                    </div>
                    <hr class="transparent mx-1 my-0">
                    <div class="callout callout-warning m-0 py-1">
                        <div class="avatar float-right">
                            <img src="<%=contextPath%>/bootstrapBoot/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                        </div>
                        <div>Meeting with
                            <strong>Lucas</strong>
                        </div>
                        <small class="text-muted mr-1"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>
                        <small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>
                    </div>
                    <hr class="mx-1 my-0">
                    <div class="callout callout-info m-0 py-1">
                        <div class="avatar float-right">
                            <img src="<%=contextPath%>/bootstrapBoot/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                        </div>
                        <div>Skype with
                            <strong>Megan</strong>
                        </div>
                        <small class="text-muted mr-1"><i class="icon-calendar"></i>&nbsp; 4 - 5pm</small>
                        <small class="text-muted"><i class="icon-social-skype"></i>&nbsp; On-line</small>
                    </div>
                    <hr class="transparent mx-1 my-0">
                    <div class="callout m-0 py-h text-muted text-center bg-faded text-uppercase">
                        <small><b>Tomorrow</b>
                        </small>
                    </div>
                    <hr class="transparent mx-1 my-0">
                    <div class="callout callout-danger m-0 py-1">
                        <div>New UI Project -
                            <strong>deadline</strong>
                        </div>
                        <small class="text-muted mr-1"><i class="icon-calendar"></i>&nbsp; 10 - 11pm</small>
                        <small class="text-muted"><i class="icon-home"></i>&nbsp; creativeLabs HQ</small>
                        <div class="avatars-stack mt-h">
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/2.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/3.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                        </div>
                    </div>
                    <hr class="mx-1 my-0">
                    <div class="callout callout-success m-0 py-1">
                        <div>
                            <strong>#10 Startups.Garden</strong>Meetup</div>
                        <small class="text-muted mr-1"><i class="icon-calendar"></i>&nbsp; 1 - 3pm</small>
                        <small class="text-muted"><i class="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>
                    </div>
                    <hr class="mx-1 my-0">
                    <div class="callout callout-primary m-0 py-1">
                        <div>
                            <strong>Team meeting</strong>
                        </div>
                        <small class="text-muted mr-1"><i class="icon-calendar"></i>&nbsp; 4 - 6pm</small>
                        <small class="text-muted"><i class="icon-home"></i>&nbsp; creativeLabs HQ</small>
                        <div class="avatars-stack mt-h">
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/2.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/3.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/4.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/5.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                            <div class="avatar avatar-xs">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/8.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                            </div>
                        </div>
                    </div>
                    <hr class="mx-1 my-0">
                </div>
                <div class="tab-pane p-1" id="messages" role="tabpanel">
                    <div class="message">
                        <div class="py-1 pb-3 mr-1 float-left">
                            <div class="avatar">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                <span class="avatar-status badge-success"></span>
                            </div>
                        </div>
                        <div>
                            <small class="text-muted">Lukasz Holeczek</small>
                            <small class="text-muted float-right mt-q">1:52 PM</small>
                        </div>
                        <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                        <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
                    </div>
                    <hr>
                    <div class="message">
                        <div class="py-1 pb-3 mr-1 float-left">
                            <div class="avatar">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                <span class="avatar-status badge-success"></span>
                            </div>
                        </div>
                        <div>
                            <small class="text-muted">Lukasz Holeczek</small>
                            <small class="text-muted float-right mt-q">1:52 PM</small>
                        </div>
                        <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                        <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
                    </div>
                    <hr>
                    <div class="message">
                        <div class="py-1 pb-3 mr-1 float-left">
                            <div class="avatar">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                <span class="avatar-status badge-success"></span>
                            </div>
                        </div>
                        <div>
                            <small class="text-muted">Lukasz Holeczek</small>
                            <small class="text-muted float-right mt-q">1:52 PM</small>
                        </div>
                        <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                        <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
                    </div>
                    <hr>
                    <div class="message">
                        <div class="py-1 pb-3 mr-1 float-left">
                            <div class="avatar">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                <span class="avatar-status badge-success"></span>
                            </div>
                        </div>
                        <div>
                            <small class="text-muted">Lukasz Holeczek</small>
                            <small class="text-muted float-right mt-q">1:52 PM</small>
                        </div>
                        <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                        <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
                    </div>
                    <hr>
                    <div class="message">
                        <div class="py-1 pb-3 mr-1 float-left">
                            <div class="avatar">
                                <img src="<%=contextPath%>/bootstrapBoot/img/avatars/7.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
                                <span class="avatar-status badge-success"></span>
                            </div>
                        </div>
                        <div>
                            <small class="text-muted">Lukasz Holeczek</small>
                            <small class="text-muted float-right mt-q">1:52 PM</small>
                        </div>
                        <div class="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                        <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
                    </div>
                </div>
                <div class="tab-pane p-1" id="settings" role="tabpanel">
                    <h6>Settings</h6>

                    <div class="aside-options">
                        <div class="clearfix mt-2">
                            <small><b>Option 1</b>
                            </small>
                            <label class="switch switch-text switch-pill switch-success switch-sm float-right">
                                <input type="checkbox" class="switch-input" checked="">
                                <span class="switch-label" data-on="On" data-off="Off"></span>
                                <span class="switch-handle"></span>
                            </label>
                        </div>
                        <div>
                            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                        </div>
                    </div>

                    <div class="aside-options">
                        <div class="clearfix mt-1">
                            <small><b>Option 2</b>
                            </small>
                            <label class="switch switch-text switch-pill switch-success switch-sm float-right">
                                <input type="checkbox" class="switch-input">
                                <span class="switch-label" data-on="On" data-off="Off"></span>
                                <span class="switch-handle"></span>
                            </label>
                        </div>
                        <div>
                            <small class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                        </div>
                    </div>

                    <div class="aside-options">
                        <div class="clearfix mt-1">
                            <small><b>Option 3</b>
                            </small>
                            <label class="switch switch-text switch-pill switch-success switch-sm float-right">
                                <input type="checkbox" class="switch-input">
                                <span class="switch-label" data-on="On" data-off="Off"></span>
                                <span class="switch-handle"></span>
                            </label>
                        </div>
                    </div>

                    <div class="aside-options">
                        <div class="clearfix mt-1">
                            <small><b>Option 4</b>
                            </small>
                            <label class="switch switch-text switch-pill switch-success switch-sm float-right">
                                <input type="checkbox" class="switch-input" checked="">
                                <span class="switch-label" data-on="On" data-off="Off"></span>
                                <span class="switch-handle"></span>
                            </label>
                        </div>
                    </div>
                   
                </div>
            </div>
        </aside>
    </div>
    <footer class="app-footer">
        <a href="https://genesisui.com">源信</a> © 2017
        <span class="float-right">
            Powered by <a href="http://wwww.ssinfo.com">光艺软件科技</a>
        </span>
    </footer>
    <script src="<%=contextPath%>/bootstrapBoot/js/libs/jquery.min.js"></script>
    <script src="<%=contextPath%>/bootstrapBoot/js/libs/tether.min.js"></script>
    <script src="<%=contextPath%>/bootstrapBoot/js/libs/bootstrap.min.js"></script>
    <script src="<%=contextPath%>/bootstrapBoot/js/libs/pace.min.js"></script>
    <script src="<%=contextPath%>/bootstrapBoot/js/app.js"></script>
</body>

</html>