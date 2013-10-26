package sgd.rs;

import com.emc.xcp.services.process.rs.AbstractProcessCreateController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Da_def_create_crear_expediente_si_initiateDomain;


@Controller(value = "sgd.rs.Crear_expediente_siCreateInputController")
@RequestMapping(value = "/application/processes/sgd_crear_expediente_si", method = RequestMethod.POST)
public class Crear_expediente_siCreateInputController extends AbstractProcessCreateController<Da_def_create_crear_expediente_si_initiateDomain> {
    public Crear_expediente_siCreateInputController() {
        super("sgd_crear_expediente_si", Da_def_create_crear_expediente_si_initiateDomain.class);
    }
}