wx.onMessage(data => {
    console.log("cmd in worker -> " + data.item);

    switch (data.item) {
        case "friend":
        wx.getFriendCloudStorage({
            keyList: ["selfOpenId"],
            success: res => {
                console.log("----------> in worker - getFriendCloudStorage: " + console.dir(res.data));
            }
        });
        break;
    case "user":
        wx.getUserInfo({
            openIdList: ["selfOpenId"],
            success: res => {
                console.log("----------> in worker - getUserInfo: " + res.data[0].nickName);
            }
        });
        break;
    case "group":
        wx.getGroupCloudStorage({
            shareTicket: "",
            keyList: ["selfOpenId"],
            success: res => {
                console.log("----------> in worker - getGroupCloudStorage: " + res.data);
            }
        });
        break;
    }
});
