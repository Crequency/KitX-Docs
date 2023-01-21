import{_ as t,M as s,p as o,q as i,N as c,a1 as r,R as e,t as n}from"./framework-8cd5abc2.js";const l={},d=r(`<h1 id="order-of-execution" tabindex="-1"><a class="header-anchor" href="#order-of-execution" aria-hidden="true">#</a> Order of Execution</h1><h2 id="order-of-execution-of-dashboard" tabindex="-1"><a class="header-anchor" href="#order-of-execution-of-dashboard" aria-hidden="true">#</a> Order of Execution of Dashboard</h2><p>All the <code>Managers</code>, <code>Services</code> and source code in this process are in <code>KitX Dashboard/Services/</code></p><ol><li>Initialize EventBus (<code>EventHandlers</code>)</li><li>Process command line arguments</li><li>Check if there is another instance running to prevent multiple instances running at the same time</li><li>StartUp check <ol><li>Read configuration file, initialize configuration information (if it exists, read it, if not, initialize default configuration)</li><li>Init log system, start logging</li><li>Init global exception handler</li><li>Init environment (read if it exists, create if not) <ol><li>Common.Algorithm</li></ol></li><li>Init database (read if it exists, create if not)</li><li>Init task manager (<code>TasksManager</code>)</li><li>Init network manager (<code>WebManager</code>)</li><li>Init data record manager (<code>StatisticsManager</code>)</li><li>Init event handlers (<code>EventHandlers</code>)</li><li>Init file monitoring manager (<code>FileWatcherManager</code>)</li></ol></li><li>Enter app lifetime loop, launch gui</li></ol><h2 id="network-initialization-process" tabindex="-1"><a class="header-anchor" href="#network-initialization-process" aria-hidden="true">#</a> Network Initialization Process</h2><ul><li>In the 4.7 step of <code>Dashboard Startup Process</code>, the actual code executed is:<div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>  <span class="token preprocessor property">#<span class="token directive keyword">region</span> Init </span><span class="token return-type class-name">WebManager</span>

  Program<span class="token punctuation">.</span>TasksManager<span class="token punctuation">.</span><span class="token function">SignalRun</span><span class="token punctuation">(</span><span class="token keyword">nameof</span><span class="token punctuation">(</span>SignalsNames<span class="token punctuation">.</span>MainWindowInitSignal<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token punctuation">{</span>
      <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token punctuation">{</span>
          Thread<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>Program<span class="token punctuation">.</span>Config<span class="token punctuation">.</span>Web<span class="token punctuation">.</span>DelayStartSeconds <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          Program<span class="token punctuation">.</span>WebManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WebManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token preprocessor property">#<span class="token directive keyword">endregion</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>This task will be <code>Raise</code> after the <code>InitWindow()</code> function in <code>MainWindow.xaml.cs</code> is executed<br> Then sleep for <code>Program.Config.Web.DelayStartSeconds</code> seconds before starting the network-related services</li><li><code>WebManager.Start()</code> Method will separately init <code>DevicesManager</code> , <code>DevicesServer</code> , <code>PluginsManager</code> and <code>PluginsServer</code></li><li><code>DevicesServer</code> call <code>Start()</code> method, then start to broadcast device info struct udp pack, present as json serialized string of <code>DeviceInfoStruct</code> (This struct define in <code>KitX.Web.Rules</code>)<br> At the same time, it will also listen to udp packets from the local area network multicast, and parse them into <code>DeviceInfoStruct</code> structures, and add them to the interface through the <code>DevicesManager.Update(DeviceInfoStruct)</code> method</li><li><code>PluginServer</code> will start listening for network connection requests after calling the <code>Start()</code> method, and establish a tcp connection with the requested plugin. After receiving a report starting with <code>&quot;PluginStruct: &quot;</code>, the remaining part is deserialized as a json string into a <code>PluginStruct</code> structure, and added to the interface through the <code>PluginsManager.Execute(string, IPEndPoint)</code> method</li></ul><h2 id="self-organizing-network-process" tabindex="-1"><a class="header-anchor" href="#self-organizing-network-process" aria-hidden="true">#</a> Self-organizing network process</h2><p>Based on the udp device packets sent continuously in the local area network, KitX Dashboard can easily determine the devices running KitX Dashboard in the local area network</p><p>Add tcp server related fields to the udp device packets, and you can automatically establish connections based on the udp device packets to form a network</p><p>Specific process: (View from the perspective of a device)</p>`,10),p=e("p",null,"Sure, the observation process will not end after connecting to the main control or building the main control",-1),u=e("p",null,"This process will continue to observe, in order to prevent multiple devices in the network from establishing the main control at the same time",-1),h=e("p",null,[n("If you observe that the "),e("code",null,"DeviceServerBuildTime"),n(" field in the udp device packet of other main controls is earlier than the time when your main control service is established, you will actively close the server and restart the observation process")],-1);function k(g,m){const a=s("Mermaid");return o(),i("div",null,[d,c(a,{id:"mermaid-136",code:"eJx1kLFugzAURfd8xR3JkK1SlypVgRAxVIoUpM4Gv8ZWwEb2g6oq/ffa4KFLVt+re87zzYlRocl3wFtWCq9aK5zElYVjknscDkcstdEMQ/xl3R2OehEieHKz7sgvyLMPwZ0KSUd6DtEkR0iKKUbR3Yn9Puzn61jxU/t3oU255q+/ISg2SuMmWlBmhTWGOgYr7dPMS+uOjXJ2uinUl/kJwkhsC9egQe5iHeNTUy997GrzwCGhKtH7wDoFFzyzAuthZbCFbeNhBGMxBM20sXqe/ntWWT7pXiLeklSwuUROqiZO/N1yfTln54AwYd0Nou+/Y7fakt0fVuWAAQ=="}),p,u,h])}const v=t(l,[["render",k],["__file","order.html.vue"]]);export{v as default};
