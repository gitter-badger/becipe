import play.api._
import play.api.Play.current
import play.api.Logger

object Global extends GlobalSettings {
  
  override def onStart(app: Application) = {
  	Logger.info("Starting application...")
  }
  
}
