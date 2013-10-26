package sgd.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import sgd.domain.Carpeta;


@Controller(value = "sgd.rs.CarpetaController")
@RequestMapping(value = "/application/sgd_carpetas/{id}")
public class CarpetaController extends AbstractObjectController<Carpeta> {
    public CarpetaController() {
        super(Carpeta.class);
    }
}