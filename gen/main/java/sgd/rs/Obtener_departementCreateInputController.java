package sgd.rs;

import com.emc.xcp.services.process.rs.AbstractProcessCreateController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Da_def_create_obtener_departement_initiateDomain;


@Controller(value = "sgd.rs.Obtener_departementCreateInputController")
@RequestMapping(value = "/application/processes/sgd_obtener_departement", method = RequestMethod.POST)
public class Obtener_departementCreateInputController extends AbstractProcessCreateController<Da_def_create_obtener_departement_initiateDomain> {
    public Obtener_departementCreateInputController() {
        super("sgd_obtener_departement", Da_def_create_obtener_departement_initiateDomain.class);
    }
}