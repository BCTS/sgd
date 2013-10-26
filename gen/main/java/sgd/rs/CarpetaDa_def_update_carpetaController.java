package sgd.rs;

import com.emc.xcp.services.framework.rs.AbstractObjectUpdateController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.CarpetaDa_def_update_carpetaInput;


@Controller(value = "sgd.rs.CarpetaDa_def_update_carpetaController")
@RequestMapping(value = "/application/sgd_carpetas/{id}", method = RequestMethod.PUT, params = "type=sgd_da_def_update_carpeta")
public class CarpetaDa_def_update_carpetaController extends AbstractObjectUpdateController<CarpetaDa_def_update_carpetaInput> {
    public CarpetaDa_def_update_carpetaController() {
        super(CarpetaDa_def_update_carpetaInput.class);
    }
}