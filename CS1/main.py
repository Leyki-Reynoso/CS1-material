def define_env(env):
    @env.macro
    def hover(text, img):
        return f'<span class="img-hover">{text}<img src="{img}" alt=""></span>'