package sgd.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectTemplateController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import sgd.domain.Carpeta;


@Controller(value = "sgd.rs.CarpetaTemplateController")
@RequestMapping(value = "/application/sgd_carpetas/template")
public class CarpetaTemplateController extends AbstractObjectTemplateController<Carpeta> {
    public CarpetaTemplateController() {
        super(Carpeta.class);
    }
}