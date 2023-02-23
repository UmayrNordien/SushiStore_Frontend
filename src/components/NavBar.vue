<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                <a><img class="logo" src="https://i.postimg.cc/15GfsLjs/giphy-gif-cid-ecf05e47q2wujpdodzevryht0cs41oom7in0eh8atdpgalw2-rid-giphy.gif"></a>
                <!-- <iframe src="https://giphy.com/embed/wpa4fFzRdYKgEYU6YN" width="100" height="100" link="disabled"></iframe><p><a href="https://giphy.com/stickers/cute-food-sushi-wpa4fFzRdYKgEYU6YN"></a></p> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0 gap-5">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link" aria-current="page"><i class='bx bx-home-smile'></i> Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/admin" class="nav-link"><i class='bx bxs-key'></i> Admin</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link"><i class='bx bx-fingerprint'></i> Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/registration" class="nav-link"><i class='bx bx-clipboard' ></i> Registration</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled"><i class='bx bx-sushi'></i> specials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link w-25 mx-auto"><i class='bx bx-cart'></i></a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control w-75 mx-auto" type="search" placeholder="" aria-label="Search">
                        <button class="btn btn-outline-light" type="submit"><i class='bx bx-search-alt-2 bx-tada'></i></button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default{
}
</script>

<style scoped>
.logo{
    height: 100px;
    width: 100px;
    margin: 0;
    padding: 0;
}
.navbar-toggler{
    color: #9EA1D4;
}
.navbar-toggler:hover{
    color: #FD8A8A;
}
.navbar {
  background-color: #F1F7B5 !important;
}

.navbar-brand {
  color: #9EA1D4;
}

.nav-link {
  color: #9EA1D4;
}

nav a.router-link-exact-active {
  color: #FD8A8A;
}

.dropdown-menu {
  background-color:#9EA1D4;
}

.btn{
    color: #9EA1D4;
    border-color:#9EA1D4;
}
.btn:hover{
    color: #FD8A8A;
    border-color:#FD8A8A;
    background-color: transparent;
}
</style>
  
  