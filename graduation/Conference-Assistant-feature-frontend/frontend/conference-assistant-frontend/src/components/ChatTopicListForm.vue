<template>
    <div class="chat-topiclist-form">
        <div class="added-topic-div">
            <ChatroomInputForm @addChatInfo="addChatInfo"/>
                <ul class="topic-list">
                    <li v-for="(t, index) in topics" :key="index">
                        <div>{{t.topic}}</div>
                        <hr style="border : 1px solid #eeeeee; margin-top:15px;">
                    </li>
                </ul>
                <button class="ok-btn" type="button" @click="close">OK</button>
        </div>
    </div>
</template>
<script>
import ChatroomInputForm from './ChatroomInputForm'
export default {
    name : 'ChatTopicListForm',
    components:{
        ChatroomInputForm
    },
    data(){
        return{
            topics:[]
        };
    },
    methods:{
        addChatInfo(topic,roomname ){
            // this.topics=[...this.topics, topic];
            this.topics.push(topic);
        },
        close(){
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
.topic-list{
    height: 180px;
   overflow-y:scroll;
}
hr{
    border :2px solid rgb(219, 219, 219);
}
.boundary-line-hr{
    border :16px solid #f7f7f7;
    margin-left: -60px;
    width:538px;
}
.added-topic-div{
    padding-top: 10px;
    margin-bottom: 5px;
    font-size:14px;
}
.ok-btn{
    height: 45px;
    width: 130px;
    margin-left: 75%;
    border-radius: 0.3rem;
    background-color: #32a852;
    font-weight: 600;
    color:white;
    /* position 하단 고정 */
    position: fixed;
    bottom: 2rem;
    left: 0;


}
</style>