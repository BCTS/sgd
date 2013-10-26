package sgd.rs;

import com.emc.xcp.services.content.rs.AbstractDeleteOperationController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.CarpetaDa_def_delete_carpetaInput;


@Controller(value = "sgd.rs.CarpetaDa_def_delete_carpetaController")
@RequestMapping(value = "/application/sgd_carpetas/{id}", method = RequestMethod.DELETE, params = "type=sgd_da_def_delete_carpeta")
public class CarpetaDa_def_delete_carpetaController extends AbstractDeleteOperationController<CarpetaDa_def_delete_carpetaInput> {
    public CarpetaDa_def_delete_carpetaController() {
        super(CarpetaDa_def_delete_carpetaInput.class);
    }
}