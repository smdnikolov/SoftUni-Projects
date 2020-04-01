<template>
  <div class="sidenav">
    <div class="navRight">
      <p style="font-size:25px;color:gray;">Seen all our Memes? Find more at:</p>
      <a href="https://9gag.com/" target="_blank">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAACRCAMAAABaFeu5AAAAclBMVEUAAAD///9AQEBMTEz8/PxpaWm2trbOzs719fXa2trs7Oyampr5+flwcHCkpKSFhYXk5OQjIyM2NjZGRkYpKSkcHByUlJR/f39dXV14eHjU1NTKysq9vb2srKw7OztUVFQSEhIwMDALCwuNjY1aWlpkZGSRbeCHAAADzElEQVR4nO3d6VbqMBSGYSJQoExlkMEyVJH7v8VzCoodkp0OYijrff7as1b4jmxCdhJbLQAAAAAAAAAAAAAAAAAA/tjJH7sewpPqBkqpwdH1MJ7QIlRX3tL1UJ7M60TdjFauR/NUTiOVRNn9NeeByhq0XQ/qKcx3uWRjuw/XA2u+iTbZ2Mn10BpubUz2v/7Z9fAabBNI0cZld+F6iA217FmSvZRd16NsosgrkGxs6HqkjZOZ0Ur8tevBNko3P6OV9D5dD7gxDqE9zgzv1fWgGyEyz2glLDLYTYsX2rT+1vXQH5xlRivPyt6Y7ZrN9EsH38JlayF/yLHIYCIX2uC69HXui09NHL+GxzQVQ0tUU3nq608dvobHZCm0kyjx7HIvPvt2cPUiHtNGTCvMpnWUP9TmTl7Do+oKSQW6b11b6ff85c/H/8jM2fZN9XNoLrtkm2TMdmKeVZlXysg2yZDtSF4mmJFtAabfW7FbvjbN2sg2yVxve6ZNShvzVzSyTZLmCfuZ5h8YOutkmzcWktJ1yycd6XmyTbJ0x/x0t9xYaMlWayF/1er9rB8KhZZsDcbykoJ3nenOCjR8yDZvKL7XO3HbRl6mIVuzSF4c9/eWQku2ksNbofTItpKuT7b3MxUnr2RbT8ktCtn/C7KVvMgfammrI9mWYpnt/vCWrTbZlnQqMuG67G4m2/KsXxT61+Vdsq3AsnV8FV0fI9tKPs1ld3frrJNtRVt9PzdI9CPItrJhPtn0Pnyyre6Qme12MjvqyLaO1JHe8D3zU7Kt57bNMcgfkybbui79x77uFC/Z1jbbdfbaH5Dt/ZDt/ZDt/ZDt/SzItrhFuZNiJ7ItKtor5UWFH1/kWsNkazK95NMpeC/CTLOTjGz1zrcWeqEDuiddT5hsdT5T7+83270IhqYa2ebNc+9vTzoq1jZtuyPbrGileX93jPciROZuGtlmjA17lQzHSaTjv2Sb0hY2LPfys92zuHuBbJMiy77m9DmzueWOCi6vSdvK2xcTy7ZCoY0FXOCaNxS3Lwbfx0nk6xNGXMWmFVmOk8RtsqNcPHa6s2iIvVjK7sFSaPkQk4yLnWjQ8buuB//w5LJrNNK30pCyLH9loFIht1cVcyx31aVSA26oKW5d5rAOhbacD/mkeUKHO91Ley92nGTPn4CpQlq/+RLyNzSqsiwyBFzLWodmX/M3lg7q0vVxLzzXI3sG+f0H6mvhBvXlym6wcT2kJ5Iqu8YrGlFJor0+oWXz2762hYSs0d7D1FcBSwf3QrIAAAAAAAAAAAAAAAAAgL/3D/MXKIipxM2KAAAAAElFTkSuQmCC"
          height="200px"
          width="300px"
          alt
        />
      </a>
      <a href="https://hiddenlol.com/fresh" target="_blank">
        <img
          src="https://scontent-sof1-1.xx.fbcdn.net/v/t31.0-8/p960x960/19667534_1540285636022824_1440491988987351943_o.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=lXluF5OJec8AX9lzH3n&_nc_ht=scontent-sof1-1.xx&_nc_tp=6&oh=b727a186b38e0995e1145bad5e32126d&oe=5EAA1922"
          height="200px"
          width="300px"
          alt
        />
      </a>
      <a href="https://hugelol.com/" target="_blank">
        <img
          src="https://i.pinimg.com/originals/2b/fb/23/2bfb23891a2b36674cf4215fb045637f.png"
          height="200px"
          width="300px"
          alt
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "appSideNavigation",
  props: {},
 
};
</script>


<style scoped>
.sidenav {
  display: inline;
  padding: 10px 0;
}
.navRight {
  display: inline-block;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: gray;
  display: inline-block;
  padding: 32px;
}
.sidenav a:hover {
  opacity: 0.6;
}

.sidenav a:hover {
  color: #064579;
}
.container {
  width: 100%;
}
</style>
