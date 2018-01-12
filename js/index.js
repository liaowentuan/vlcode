var app = angular.module("app",[])
app.controller("mainCtr",function($scope){
	$scope.num = 10;
	$scope.cities = [
		{key:'rtsp://admin:lst12345678@10.10.88.11:554/h264/ch1/main/av_stream',value:'前通道'},
		{key:'rtsp://admin:lst12345678@10.10.88.12:554/h264/ch1/main/av_stream',value:'后门'},
		{key:'rtsp://admin:lst12345678@10.10.88.13:554/h264/ch1/main/av_stream',value:'正门  '},
		{key:'rtsp://admin:lst12345678@10.10.88.14:554/h264/ch1/main/av_stream',value:'走廊'},
        {key:'rtsp://10.10.97.50:554/snl/live/1/1',value:'研发一部'},
        {key:'rtsp://10.10.92.160:554/bs0',value:'160'},
        {key:'rtsp://10.10.92.156:554/bs0',value:'156'}
	]
	var vlc=document.getElementById("vlc");
	$scope.play = function(){
		vlc.playlist.stop();
        vlc.playlist.clear();
		vlc.playlist.add($scope.city);
		vlc.playlist.play();
	}
    function play2(){
        var vlc2=document.getElementById("vlc2");
        vlc2.playlist.stop();
        // vlc2.playlist.add('rtsp://10.10.97.50:554/snl/live/1/1');
        vlc2.playlist.add('rtsp://10.10.97.50:554/snl/live/1/1','live',':network-caching=350');
        vlc2.playlist.play();
    }
    play2();
    function play3(){
        var vlc3=document.getElementById("vlc3");
        vlc3.playlist.stop();
        vlc3.playlist.add('rtsp://10.10.97.50:554/snl/live/1/1');
        // vlc3.playlist.add('rtsp://10.10.97.50:554/snl/live/1/1','live',':network-caching=350');
        vlc3.playlist.play();
    }
    play3();
    
	/*
	function initPlayUrl(){
 		
 // 添加播放地址
 //vlc.playlist.add(window.opener.vdUrl);
 // 播放
 // vlc.playlist.play();
 // 添加播放地址方式2 -- 推荐用下面的方法控制播放列表
 	var vedio_url=window.opener.vdUrl;
 	itemId= vlc.playlist.add(vedio_url);
    vlc.playlist.playItem(itemId);
   
    // 获取VLC当前音量
    vlcSound=vlc.audio.volume;
    // 设置VLC音量值
    document.getElementById("vlc_sound").value=vlcSound;
    // 播放按钮不可用
    document.getElementById("play_button").disabled=true;
   
    // 检查播放节目的状态 -- 注意这个是延时操作哦（setTimeout以毫秒为单位，这里延时0.5秒）
    setTimeout(checkVedioStatus,500);
	}
	// 检查播放节目的状态
	function checkVedioStatus(){
    if(vlc.input.state>2 && vlc.input.state<5){
     isPlaying=1;
     // vlc.input.time 当前播放时长，单位毫秒
     // vlc.input.length 节目总时长，单位毫秒
     videoLength=parseInt(vlc.input.length/1000);
     var temp_total_time=parseTime(videoLength);
     // 总时长设置
     document.getElementById("vedio_length").value=temp_total_time;
     // 当前可以输入时间段跳转
     document.getElementById("time_change").disabled=false;
     // 获得当前系统时间
     then_time=new Date().getTime();
     // 计算当前播放时间点
     checkTime();
    }else{
     // 如果不是播放状态就在延时执行
     setTimeout(checkVedioStatus,500);
    }
	}*/
})