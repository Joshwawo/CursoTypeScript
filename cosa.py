import keyboard

def handler(e):
    return False

keyboard.hook_key("aplicación", handler, suppress=True)
keyboard.wait("ctrl+f1")