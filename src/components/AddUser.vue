<template>
    <div class="container">
        <div class="row">
            <div class="modal fade" :id="addUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="display-4 m-auto" id="exampleModalLabel">Add user</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body ">
                            <form class="form" @submit.prevent="addOrUpdateUser">
                                <div class="form-control-wrapper">
                                    <span class="inline">
                                        <input class="form-control" type="text" placeholder="Firstname" required
                                            v-model="firstName" />
                                        <i class="bi bi-person"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper">
                                    <span class="inline">
                                        <input type="text" class="form-control" placeholder="Lastname" v-model="lastname">
                                        <i class="bi bi-person"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper">
                                    <span class="inline">
                                        <input type="text" class="form-control" placeholder="Gender" v-model="gender">
                                        <i class="bi bi-person-fill"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper">
                                    <span class="inline">
                                        <input type="text" class="form-control" placeholder="Cellphone" v-model="cellphone"
                                            maxlength="10">
                                        <i class="bi bi-telephone-fill"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper">
                                    <span class="inline">
                                        <input type="email" class="form-control" placeholder="Email" v-model="email">
                                        <i class="bi bi-envelope"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper">
                                    <span class="inline">
                                        <input type="password" class="form-control" placeholder="Password"
                                            v-model="userPwd">
                                        <i class="bi bi-person-fill"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper" v-show="this.isAdmin">
                                    <span class="inline">
                                        <input type="text" class="form-control" placeholder="user / admin"
                                            v-model="userRole">
                                        <i class="bi bi-person"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper">
                                    <span class="inline">
                                        <input type="text" class="form-control" placeholder="Profile URL"
                                            v-model="profileUrl">
                                        <i class="bi bi-link"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper">
                                    <span class="inline">
                                        <input type="text" class="form-control" placeholder="Address" v-model="address">
                                        <i class="bi bi-file-person"></i>
                                    </span>
                                </div>
                                <div class="form-control-wrapper">
                                    <label class="form-control bg-gradient" v-show="usrMsg">{{ usrMsg }}</label>
                                </div>
                                <div class="form-control-wrapper">
                                    <button type="submit" class="btn btn-success">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success m-auto" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div></template>
  
<script>
export default {
    props: ["addUser"],
    data() {
        return {
            firstName: null,
            lastName: null,
            gender: null,
            cellphoneNumber: null,
            emailAdd: null,
            userPass: null,
            userRole: null,
            userProfile: null,
            joinDate: null
        }
    },
    setup() {


        return {}
    }
}
</script>