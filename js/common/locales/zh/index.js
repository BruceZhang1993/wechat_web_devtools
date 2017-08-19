module.exports = {
  APP_NEED_UPDATE: '已有新的版本 %s，正在下载更新，请稍候重启',
  APP_NEED_NOT_UPDATE: '当前已是最新版本',
  NETWORK_ERROR: '网络错误，状态码：%s',
  FILE_NOT_FOUND: '未找到入口 %s 文件，或者文件读取失败，请检查后重新编译。',
  JSON_FILE_ERROR: 'json 文件错误',
  JSON_PARSE_ERROR: '%s 文件解析错误',
  JSON_ENTRANCE_ERROR: '读取入口页面错误',
  ENTRANCE_NOT_FOUND: '未找到入口页面\napp.json 中定义的 pages : %s',
  JSON_PAGE_WXML_NOT_EXISTS: '未找到 %s 中的定义的 page "%s" 对应的 WXML 文件',
  JSON_PAGE_JS_NOT_EXISTS: '未找到 %s 中的定义的 page "%s" 对应的 JS 文件',
  JSON_CUSTOM_COMPILE_PATH_NOT_EXISTS_TITLE: 'app.json 或自定义编译条件错误',
  JSON_CUSTOM_COMPILE_PATH_NOT_EXISTS: 'app.json 中未定义自定义编译中指定的启动页面 %s',
  JSON_TABBAR_ERROR: 'tabbar 配置解析错误',
  JSON_TABBAR_SHOULD_BE_LIST: 'tabBar.list 应为数组',
  JSON_TABBAR_AT_LEAST: 'tabBar.list 需至少包含 %s 项',
  JSON_TABBAR_AT_MOST: 'tabBar.list 不能超过 %s 项',
  JSON_TABBAR_ITEM_OBJECT: 'tabBar.list[%s] 需为 Object',
  JSON_TABBAR_PATH_EMPTY: 'tabBar.list[%s].pagePath 不能为空',
  JSON_TABBAR_PATH_STRING: 'tabBar.list[%s].pagePath 需为 String',
  JSON_TABBAR_PATH_NOT_CONTAIN: `tabBar.list[%s].pagePath 不应该包含'%s'`,
  JSON_TABBAR_ICON_NOT_FOUND: `tabBar.list[%s].%s 文件不存在`,
  JSON_TABBAR_ICON_NOT_DIR: `tabBar.list[%s].%s 需为文件`,
  JSON_TABBAR_ICON_MAX_SIZE: `tabBar.list[%s].%s 大小超过 %skb`,
  JSON_TABBAR_ICON_EXT: `tabBar.list[%s].%s 文件格式错误，仅支持 %s 格式`,
  JSON_WIDGETS_EMPTY: 'app.json 的 widgets 字段为空',
  JSON_WIDGETS_ITEM_NOT_OBJECT: 'app.json 的 widgets[%s] 需为对象',
  JSON_WIDGETS_TYPE_INVALID: 'app.json 的 widgets[%s] 的 type 非法，有效值为[%s]',
  JSON_WIDGETS_NOT_ARRAY: 'app.json 中 widgets 字段需为数组',
  JSON_WIDGETS_TYPE_NOT_FOUND: 'app.json 的 widgets 字段缺少 type=%s 的项目',
  JSON_WIDGETS_PATH_NOT_FOUND: 'app.json 的 widgets[%s].path 找不到对应的路径',
  JSON_WIDGETS_PATH_SHOULD_BE_DIR: 'app.json 的 widgets[%s].path 需为目录',
  JSON_CONTENT_SHOULD_BE: '%s 字段需为 %s',
  JSON_CONTENT_ERROR: '%s 文件内容错误',
  CLEAN_USER_AUTH_SUCCESS: '清除工具及手机授权数据成功',
  CLEAN_USER_AUTH_ERROR: '清除工具及手机授权数据失败 %s',
  CLEAN_FILE_CACHE_SUCCESS: '清除文件存储成功',
  CLEAN_DATA_CACHE_SUCCESS: '清除数据存储成功',
  LACK_OF_FILE: '缺少文件 %s',
  JSON_PAGES_REPEAT: '%s 中的 pages 字段 "%s" 重复',
  MENU_TITLE_APP: '微信开发者工具',
  MENU_TITLE_PROJECT: '项目',
  MENU_NEW_PROJECT: '新建项目',
  MENU_OPEN_RECENT_PROJECT: '打开最近',
  MENU_TITLE_FILE: '文件',
  MENU_TITLE_SETTINGS: '设置',
  MENU_TITLE_EDIT: '编辑',
  MENU_TITLE_GOTO: '跳转',
  MENU_TITLE_TOOLS: '工具',
  MENU_TITLE_WINDOW: '界面',
  MENU_ABOUT: '关于',
  MENU_CHECK_UPDATE: '检查更新',
  MENU_SWITCH_ACCOUNT: '切换帐号',
  MENU_INSPECT: '调试',
  MENU_INSPECT_APP: '调试微信开发者工具',
  MENU_INSPECT_EDITOR: '调试编辑器',
  MENU_EXIT: '退出',
  MENU_HELP_FEEDBACK: '帮助和反馈',
  MENU_BBS: '开发者论坛',
  MENU_DOC: '开发者文档',
  MENU_SWITCH_DEV_MODE: '更换开发模式',
  MENU_WEB_DEV: '公众号网页调试',
  MENU_MINI_PROGRAM_DEV: '小程序调试',
  MENU_QUIT: '退出',
  MENU_OPEN: '打开',
  MENU_OPEN_RECENT: '打开最近',
  MENU_NEW_FILE: '新建文件',
  MENU_SAVE: '保存',
  MENU_SAVE_ALL: '保存所有',
  MENU_CLOSE_FILE: '关闭文件',
  MENU_PROJECTS: '查看所有项目',
  MENU_CLOSE_PROJECT: '关闭当前项目',
  MENU_APPEARANCE_SETTINGS: '外观设置',
  MENU_EDIT_SETTINGS: '编辑设置',
  MENU_PROXY_SETTINGS: '代理设置',
  MENU_NOTIFICATION_SETTINGS: '通知设置',
  MENU_PROJECT_SETTINGS: '项目设置',
  MENU_UNDO: '撤销',
  MENU_REDO: '重做',
  MENU_COPY: '复制',
  MENU_PASTE: '粘贴',
  MENU_CUT: '剪切',
  MENU_UNINDENT: '左缩进',
  MENU_INDENT: '右缩进',
  MENU_FORMAT_CODE: '格式化代码',
  MENU_MOVE_LINES_UP: '代码上移一行',
  MENU_MOVE_LINES_DOWN: '代码下移一行',
  MENU_COPY_LINES_UP: '复制并向上粘贴',
  MENU_COPY_LINES_DOWN: '复制并向下粘贴',
  MENU_FIND: '搜索',
  MENU_FIND_IN_FILES: '全局搜索',
  MENU_REPLACE: '替换',
  MENU_GOTO_FILE: '跳转到文件',
  MENU_GOTO_RECENT: '跳转到最近文件',
  MENU_GOTO_PREVIOUS_EDITOR: '上一个编辑器',
  MENU_GOTO_NEXT_EDITOR: '下一个编辑器',
  MENU_BUILD: '编译',
  MENU_NORMAL_BUILD: '普通编译',
  MENU_NEW_CUSTOM_BUILD: '新增编译条件',
  MENU_CUSTOM_BUILD: '自定义编译',
  MENU_BUILD_SETTINGS: '编译配置',
  MENU_SIMULATOR_TOGGLE_FOREGROUND_BACKGROUND: '前后台切换',
  MENU_CLEAR_CACHE: '清除缓存',
  MENU_CLEAR_FILE_CACHE: '清除文件缓存',
  MENU_CLEAR_AUTH_CACHE: '清除授权数据',
  MENU_CLEAR_STORAGE_CACHE: '清除数据缓存',
  MENU_PREVIEW: '预览',
  MENU_UPLOAD: '上传',
  MENU_CUSTOM_ANALYSIS: '自定义分析',
  MENU_AUTO_TEST: '自动化测试',
  MENU_PROJECT_DETAILS: '项目详情',
  MENU_EDIT_WINDOW: '编辑窗口',
  MENU_SIMULATOR: '模拟器',
  MENU_EDITOR: '编辑器',
  MENU_FILE_TREE: '目录树',
  MENU_DEVTOOLS: '调试器',
  MENU_MOVE_SIMULATOR_LEFT: '左移模拟器',
  MENU_MOVE_SIMULATOR_RIGHT: '右移模拟器',
  SETTING_APPEARANCE: '外观',
  SETTING_EDIT: '编辑',
  SETTING_PROXY: '代理',
  SETTING_NOTIFICATION: '通知',
  SETTING_THEME: '配色：',
  SETTING_THEME_DARK: '深色主题',
  SETTING_THEME_WHITE: '浅色主题',
  SETTING_MINIMAP: '代码缩略图',
  SETTING_FONT_FAMILY: '字体：',
  SETTING_FONT_SIZE: '字号：',
  SETTING_LINE_SPACING: '行距',
  SETTING_FILE_SAVE: '文件保存',
  SETTING_AUTO_SAVE: '修改文件时自动保存',
  SETTING_SAVE_BEFORE_COMPILE: '编译时自动保存所有文件',
  SETTING_COMPILE_ON_SAVE: '保存时自动编译小程序',
  SETTING_EDITOR: '编辑器：',
  SETTING_WRAP: '自动折行',
  SETTING_TAB_TO_SPACES: '用空格代替 Tab',
  SETTING_TAB_SIZE: 'Tab 大小：',
  SETTING_PROXY_SETTING: '代理设置',
  SETTING_PROXY_NONE: '不使用任何代理，勾选后直连网络',
  SETTING_PROXY_SYSTEM: '使用系统代理',
  SETTING_PROXY_USER: '手动设置代理',
  SETTING_PROXY_ADDRESS: '代理地址',
  SETTING_PROXY_PORT: '端口',
  SETTING_NOTIFICATION_SETTING: '通知设置',
  SETTING_NOTIFICATION_ENABLE_SYSTEM: '允许系统消息通知',
  SETTING_NOTIFICATION_ENABLE_BBS: '允许开发社区消息通知',

  // confirm
  CONFIRM_OPEN_IN_THIS_WINDOW_TITLE: '打开项目',
  CONFIRM_OPEN_IN_THIS_WINDOW_CONTENT: '是否要在当前窗口打开项目：%s',

  // alert
  ALERT_TOURIST_FORBIDDEN_TITLE: '错误',
  ALERT_TOURIST_FORBIDDEN_CONTENT: '游客模式无法使用本功能',

  // CGI
  CGI_ERR_NEED_RELOGIN: '需要重新登录',
  CGI_ERR_NOT_BAND: '登录用户不是该小程序的开发者',
  CGI_ERR_NEED_ADMIN: '需要管理员权限才能操作',
  CGI_ERR_NEED_UPDATE: '需要升级工具',
  CGI_ERR_NEED_SCAN_CODE: '需要扫码确认',
  CGI_ERR_EMPTY_SOURCE: '上传的源码包为空',
  CGI_ERR_SOURCE_MAX_LIMIT: '源码包超出最大限制',
  CGI_ERR_WXPKG_MAX_LIMIT: '编译后的包超出最大限制',
  CGI_ERR_INVALID_WXPKG: '无效的代码包',
  CGI_ERR_WXML_FAIL: 'wxml 编译错误，错误信息：%s',
  CGI_ERR_WXSS_FAIL: 'wxss 编译错误，错误信息：%s',
  CGI_ERR_INVALID_FILE: '非法的文件，错误信息：%s',
  CGI_ERR_INVALID_JSON: '无效的 json 文件',
  CGI_ERR_LACK_OF_FILE: '缺少文件, %s',
  CGI_ERR_BIND_NOT_24H: '当前开发者绑定时间不足 24 小时，请过后重试',
  CGI_ERR_PLATFORM_NOT_BAND: '未绑定为第三方平台的开发小程序',
  CGI_ERR_NOT_LIMITS: '未绑定网页开发者',
  CGI_ERR_NOT_LIMITS_QY: '未绑定企业号开发者',
  CGI_ERR_PLATFORM_INVALID_EXT_APPID: '不合法的 extAppid',
  CGI_ERR_PLATFORM_EXT_APPID_NOT_AUTH: 'extAppid 没有授权',
  CGI_ERR_OAUTH_NOT_SUPPORT: '暂不支持当前 URL 的 Oauth 调试支持',
  CGI_ERR_NO_PERMISSION: '没有权限',
  CGI_ERR_SYSTEM_ERROR: '系统错误，错误码：%s',
  API_NOT_SUPPORT: '开发者工具暂时不支持此 API 调试，请使用真机进行开发',
  API_NOT_ALLOW: '没有权限',
  API_USER_CANCEL: '用户拒绝授权',
  CODE_SIZE_EXCEED: '代码包大小为 %s kb，超出限制 %s kb，请删除文件后重试',
  GET_GEO_LOCATION_ERROR: '获取地理位置失败',
  CREATE_PROJECT_TIP_NO_NAME: '请填写 项目名称',
  CREATE_PROJECT_TIP_NO_DIR: '请选择 项目目录',
  CREATE_PROJECT_TIP_NO_APPID: '请填写 appid ',
  CREATE_PROJECT_TIP_HASH_EXIST: '已存在 %s %s 项目，请重新输入',
  CREATE_PROJECT_TIP_MUST_USE_EMPTY_FOLDER: '请选择空白目录创建项目',
  // ===== QCLOUD =====
  QCLOUD_DEPLOY_DEV_BEGIN_TITLE: '开始部署',
  QCLOUD_DEPLOY_DEV_BEGIN_CONTENT: '开始部署至腾讯云开发环境',
  QCLOUD_DEPLOY_DEV_SUCCESS_TITLE: '部署成功',
  QCLOUD_DEPLOY_DEV_SUCCESS_CONTENT: '成功部署至腾讯云开发环境',
  QCLOUD_DEPLOY_DEV_FAIL_TITLE: '部署到开发环境失败',
  QCLOUD_DEPLOY_DEV_NEED_UPLOAD: '请先上传代码',

  QCLOUD_DEPLOY_PRODUCT_BEGIN_TITLE: '开始部署',
  QCLOUD_DEPLOY_PRODUCT_BEGIN_CONTENT: '开始部署至腾讯云生产环境',
  QCLOUD_DEPLOY_PRODUCT_SUCCESS_TITLE: '部署成功',
  QCLOUD_DEPLOY_PRODUCT_SUCCESS_CONTENT: '成功部署至腾讯云生产环境',
  QCLOUD_DEPLOY_PRODUCT_FAIL_TITLE: '部署到生产环境失败',

  QCLOUD_RESET_SERVICE_BEGIN_TITLE: '开始重置',
  QCLOUD_RESET_SERVICE_BEGIN_CONTENT: '开始重置开发环境',
  QCLOUD_RESET_SERVICE_SUCCESS_TITLE: '重置成功',
  QCLOUD_RESET_SERVICE_SUCCESS_CONTENT: '成功重置开发环境',
  QCLOUD_RESET_SERVICE_FAIL_TITLE: '重置开发环境失败',

  QCLOUD_INSTALL_DEP_BEGIN_TITLE: '开始安装依赖',
  QCLOUD_INSTALL_DEP_BEGIN_CONTENT: '开始安装依赖',
  QCLOUD_INSTALL_DEP_SUCCESS_TITLE: '安装依赖完成',
  QCLOUD_INSTALL_DEP_SUCCESS_CONTENT: '安装依赖完成',
  QCLOUD_INSTALL_DEP_FAIL_TITLE: '安装依赖错误',

  QCLOUD_DEBUG_BEGIN_TITLE: '调试准备中',
  QCLOUD_DEBUG_BEGIN_CONTENT: '完成后会自动打开调试窗口',
  QCLOUD_DEBUG_SUCCESS_TITLE: '',
  QCLOUD_DEBUG_SUCCESS_CONTENT: '',
  QCLOUD_DEBUG_FAIL_TITLE: '',

  QCLOUD_RESTART_SERVICE_BEGIN_TITLE: '开始重启服务',
  QCLOUD_RESTART_SERVICE_BEGIN_CONTENT: '开始重启腾讯云服务',
  QCLOUD_RESTART_SERVICE_SUCCESS_TITLE: '重启服务成功',
  QCLOUD_RESTART_SERVICE_SUCCESS_CONTENT: '重启腾讯云服务成功',
  QCLOUD_RESTART_SERVICE_FAIL_TITLE: '重启服务失败',

  QCLOUD_STOP_SERVICE_BEGIN_TITLE: '开始停止服务',
  QCLOUD_STOP_SERVICE_BEGIN_CONTENT: '开始停止腾讯云服务',
  QCLOUD_STOP_SERVICE_SUCCESS_TITLE: '停止服务成功',
  QCLOUD_STOP_SERVICE_SUCCESS_CONTENT: '停止腾讯云服务成功',
  QCLOUD_STOP_SERVICE_FAIL_TITLE: '停止服务失败',

  QCLOUD_UPLOAD_BEGIN_TITLE: '开始上传',
  QCLOUD_UPLOAD_BEGIN_CONTENT: '开始上传至腾讯云',
  QCLOUD_UPLOAD_SUCCESS_TITLE: '上传成功',
  QCLOUD_UPLOAD_SUCCESS_CONTENT: '成功上传至腾讯云',
  QCLOUD_UPLOAD_FAIL_TITLE: '上传至腾讯云失败',


  WIDGET_NETWORK_ERROR: '网络错误',
  WIDGET_GET_SEARCH_RESULT_ERROR: '获取搜索数据失败:%s，请更换搜索条件后重试',
  WIDGET_IMAGE_SIZE_ERROR: '图片超过大小限制',
  WIDGET_IMAGE_SIZE_ERROR_TIP: '在非 wifi 环境下，30 分钟内图片大小不能超过 %s kb'
}