<template>
    <div class="main-page">
        <SidebarMenu/>
        <mainAppHeader/>
        <ChatroomForm/>
        <SelectedChatForm/>
        <AIManagerForm/>
        <AIKeywordListForm server="http://127.0.0.1:5000/corekeyword"></AIKeywordListForm>

    </div>
</template>
<script>
import SidebarMenu from '../components/SidebarMenu'
import mainAppHeader from '../components/mainAppHeader'
import ChatroomForm from '../components/ChatroomForm'
import SelectedChatForm from '../components/SelectedChatForm'
import AIKeywordListForm from '../components/AIKeywordListForm'
import AIManagerForm from '../components/AIManagerForm'

export default {
    name:'MainPage',
    data(){
      return{
          props: ['msgs']
      }
    },
    components:{
        SidebarMenu,
        mainAppHeader,
        ChatroomForm,
        SelectedChatForm,
        AIKeywordListForm,
        AIManagerForm,
    }
}
</script>
<style scoped>

</style>