function Video({ video }) {
  return (
    <div class="w-full flex justify-between items-center pt-2 pb-1">
    <a href="/" class="w-[126px] h-[61px] block select-none active:scale-95 transition-transform outline-none">
    <div class="flex items-center justify-between w-full">
        <img src="../image/logo-principal.png" class="h-20 w-auto" alt="Logo SaôneLocal"/>
    </div>
    </a>
    
    <a href="/" class="w-10 h-10 transition-colors duration-150 text-saone-green active:text-saone-terracotta focus:text-saone-terracotta outline-none">
        <i class="fa-solid fa-house text-xl"></i>
    </a>
    </div>
  );
}