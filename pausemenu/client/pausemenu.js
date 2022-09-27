import * as alt from 'alt-client'
import * as native from 'natives'

let view

class PauseMenu {
    static init() {
        alt.everyTick(PauseMenu.Tick)
        alt.on('keyup', PauseMenu.Open)
    }

    static Open(key) {
        if(key === 27) {
            if(view) return
            view = new alt.WebView('http://resource/client/dist/index.html')
            alt.toggleGameControls(false)
            view.focus()
            alt.showCursor(true)
            native.displayHud(false)
            native.displayRadar(false)
            PauseMenu.Close()
            PauseMenu.Map()
            PauseMenu.Settings()
            PauseMenu.Quit()
        }
    }

    static Close() {
        view.on('PauseMenu::close', () => {
            view.destroy()
            view = null
            alt.toggleGameControls(true)
            alt.showCursor(false)
            native.displayHud(true)
            native.displayRadar(true)
        })
    }

    static Map() {
        view.on('PauseMenu::map', () => {
            view.destroy()
            view = null
            native.activateFrontendMenu(alt.hash('FE_MENU_VERSION_MP_PAUSE'), false, -1)
            alt.showCursor(false)
        })
    }

    static Settings() {
        view.on('PauseMenu::settings', () => {
            view.destroy()
            view = null
            native.activateFrontendMenu(alt.hash('FE_MENU_VERSION_LANDING_MENU'), false, -1)
            alt.showCursor(false)
        })
    }

    static Quit() {
        view.on('PauseMenu::exit', () => {
            native.restartGame()
        })
    }

    static Tick() {
        native.disableControlAction(0, 200, true)
        native.setPauseMenuActive(false)
    }
}

PauseMenu.init()
