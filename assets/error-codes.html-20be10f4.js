import{_ as e,p as r,q as t,a1 as a}from"./framework-8cd5abc2.js";const i={},o=a('<h1 id="error-codes" tabindex="-1"><a class="header-anchor" href="#error-codes" aria-hidden="true">#</a> Error Codes</h1><h2 id="_1001-startup-arguments-error" tabindex="-1"><a class="header-anchor" href="#_1001-startup-arguments-error" aria-hidden="true">#</a> 1001 - StartUp Arguments Error</h2><p>Normally caused by missing necessary parameters, such as using the <code>--import-plugin</code> parameter, but you didn&#39;t pass the path of the .kxp file<br> It is also possible that there is an internal logic error, you can check the dump.log in the root directory of the program to see the reason for the abnormal exit</p><h2 id="_1002-config-file-didn-t-found-and-process-is-not-in-init-field" tabindex="-1"><a class="header-anchor" href="#_1002-config-file-didn-t-found-and-process-is-not-in-init-field" aria-hidden="true">#</a> 1002 - Config file didn&#39;t found, and process is not in Init field</h2><p>Normally caused by using the <code>--import-plugin</code> parameter to import plugins and never starting KitX Dashboard on this machine<br> Because the configuration file will be generated when the program is started for the first time, at this time, importing plugins will cause pure errors, and I don&#39;t plan to prepare a fix plan for this error</p>',5),n=[o];function s(d,c){return r(),t("div",null,n)}const l=e(i,[["render",s],["__file","error-codes.html.vue"]]);export{l as default};