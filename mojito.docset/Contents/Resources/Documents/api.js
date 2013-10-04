YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "ActionContext",
        "Analytics.common",
        "Assets.common",
        "Composite.common",
        "Config.common",
        "Cookie.client",
        "Cookie.server",
        "Data.common.data",
        "Data.common.pageData",
        "Deploy.server",
        "Helpers.common",
        "Http.server",
        "Intl.common",
        "Meta.common",
        "Model.Vanilla",
        "Models.common",
        "MojitProxy",
        "MojitoDispatcher",
        "MojitoPerf",
        "MojitoRouter",
        "OutputBuffer",
        "OutputHandler",
        "Params.common",
        "Partial.common",
        "RSAddonConfig",
        "RSAddonDispatchHelper",
        "RSAddonMime",
        "RSAddonSelector",
        "RSAddonUrl",
        "RSAddonYUI",
        "ResourceStore.server",
        "Url.common",
        "Y.mojito.Client",
        "Y.mojito.lib.REST"
    ],
    "modules": [
        "ActionContext",
        "ActionContextAddon",
        "CommonLibs",
        "Data.common",
        "MojitoClient",
        "MojitoHooks",
        "OutputBuffer",
        "ResourceStore",
        "ResourceStoreAddon",
        "app",
        "model-vanilla",
        "mojito-perf"
    ],
    "allModules": [
        {
            "displayName": "ActionContext",
            "name": "ActionContext",
            "description": "The Action Context is a key part of the Mojito framework. The <em>ac</em>,\nfor short, gives you access to the frameworks features from within a\ncontroller function. The ac is an abstraction that allows you to execute\nmojit actions within either a server or client context."
        },
        {
            "displayName": "ActionContextAddon",
            "name": "ActionContextAddon",
            "description": "The <strong>Action Context</strong> uses a mechanism called\n<strong><em>Addons</em></strong> to provide functionality that lives both on\nthe server and/or client. Each Addon provides additional functions through a\nnamespace that is attached directly to the ac argument available in every\ncontroller function."
        },
        {
            "displayName": "app",
            "name": "app"
        },
        {
            "displayName": "CommonLibs",
            "name": "CommonLibs",
            "description": "Common Library"
        },
        {
            "displayName": "Data.common",
            "name": "Data.common",
            "description": "<strong>Access point:</strong> <em>ac.data.*</em> and  <em>ac.pageData.*</em>\nAddon that provides access to the data and pageData models.\nSee also http://developer.yahoo.com/cocktails/mojito/docs/topics/mojito_data.html#sharing-data"
        },
        {
            "displayName": "model-vanilla",
            "name": "model-vanilla",
            "description": "TODO: This will eventually become part of the YUI Core, (work in progress here\nhttps://github.com/yui/yui3/pull/323), and the only pending work in mojito will\nbe to remove this file, and replace apidoc references to Model.Vanilla with\nY.Model."
        },
        {
            "displayName": "mojito-perf",
            "name": "mojito-perf"
        },
        {
            "displayName": "MojitoClient",
            "name": "MojitoClient",
            "description": "Client side Mojito runtime"
        },
        {
            "displayName": "MojitoHooks",
            "name": "MojitoHooks",
            "description": "The hook system provides a way for application or add on developers to access the inner working of mojito.\nThere are two steps to using an hook. First, an addon needs to register an interest in a hook by calling\nregisterHook with the name of the hook and a callback function. The second step involves enabling a hook\nyour addon to recieve hooks. You need to call the enableHookGroup with the name of your addon."
        },
        {
            "displayName": "OutputBuffer",
            "name": "OutputBuffer"
        },
        {
            "displayName": "ResourceStore",
            "name": "ResourceStore",
            "description": "The ResourceStore manages information about the \"resources\" in a Mojito\napplication.  These resources are things that have representation on the\nfilesystem.\n\nYou generally don't need to worry about this class (and its addons) unless\nyou are extending Mojito.\n\nEach resource can have many different versions.  This is not talking about\nrevisions, which is how the resource changes over time.  It is instead\ntalking about how there can be a version of the resource just for iphones,\none just for android, a fallback, etc.\n\nThe metadata kept about each resource is normalized to the follow keys:\n<dl>\n     <dt><code>source</code> (object)</dt>\n     <dd>where the source came from.  (not shipped to the client.)\n         <dl>\n             <dt><code>fs</code> (object)</dt>\n             <dd>filesystem details</dd>\n             <dt><code>pkg</code> (object)</dt>\n             <dd>packaging details</dd>\n         </dl>\n     </dd>\n     <dt><code>mojit</code> (string)</dt>\n     <dd>which mojit this applies to, if any. (\"shared\" means the resource is available to all mojits.)</dd>\n     <dt><code>type</code> (string)</dt>\n     <dd>resource type</dd>\n     <dt><code>subtype</code> (string)</dt>\n     <dd>not all types of subtypes</dd>\n     <dt><code>name</code> (string)</dt>\n     <dd>common to all versions of the resource</dd>\n     <dt><code>id</code> (string)</dt>\n     <dd>unique ID.  common to all versions of the resource. (typically <code>{type}-{subtype}-{name}</code>.)</dd>\n     <dt><code>yui</code> (object)</dt>\n     <dd>for resources that are YUI modules</dd>\n </dl>\n\n The following are only used in the metadata for each resource <em>version</em>\n (The metadata for resolved resources won't have these, since they're intrinsically\n part of the resolved resource.)\n <dd>\n     <dt><code>affinity</code> (string)</dt>\n     <dd>runtime affinity.  either <code>server</code>, <code>client</code>, or <code>common</code></dd>\n     <dt><code>selector</code> (string)</dt>\n     <dd>version selector</dd>\n</dl>"
        },
        {
            "displayName": "ResourceStoreAddon",
            "name": "ResourceStoreAddon",
            "description": "The <strong>Resource Store</strong> is a Y.Base -- a host for Y.Plugins.\nEach Addon provides additional functions through a namespace that is\nattached directly to the resource store."
        }
    ]
} };
});