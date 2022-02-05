<template>
    <div class="content">
    <h2>Home</h2>

    <User v-slot:user="{ user }">
      <div v-if="user">
          <h3>User Profile</h3>
        <UserProfile :user="user" />

        <ChatList :uid="user.uid"/>
      </div>
    

      <Login v-else />
    </User>
  </div>
</template>

<script>
import Login from './Login'
import User from './User'
import UserProfile from './UserProfile'
import ChatList from './ChatList.vue'

export default {
    components: {
        Login,
        User,
        UserProfile,
        ChatList
    }
}

</script>