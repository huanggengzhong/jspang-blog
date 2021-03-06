import {Avatar,Divider} from 'antd';
import './../static/style/components/author.css'
const Author=()=>{
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="http://img3.imgtn.bdimg.com/it/u=1340902740,1229718513&fm=26&gp=0.jpg"/>
            </div>
            <div className="author-introduction">
            光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
            <Divider>程序员</Divider>
            <Avatar size={28} icon="github" className="account"/>
            <Avatar size={28} icon="qq" className="account"/>
            <Avatar size={28} icon="wechat" className="account"/>
            </div>
        </div>
    )

}
export default Author;