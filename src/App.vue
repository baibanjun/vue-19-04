<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
			<router-link to="/store">store</router-link> |
			<router-link to="/argu">argu</router-link>
    </div>
		<transition-group name="xx"> <!--多个组件需要动效，使用transition-group -->
			<router-view key="default"/>
			<router-view key="email" name="email"/>
			<router-view key="tel" name="tel"/>
		</transition-group>
  </div>
</template>

<style lang="less">
.xx-enter{
	opacity: 0;
}
.xx-enter-active{
	transition: opacity 1s ease;
}
.xx-enter-to{
	opacity: 1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
