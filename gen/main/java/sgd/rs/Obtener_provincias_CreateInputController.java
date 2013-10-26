package sgd.rs;

import com.emc.xcp.services.process.rs.AbstractProcessCreateController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Da_def_create_obtener_provincias__initiateDomain;


@Controller(value = "sgd.rs.Obtener_provincias_CreateInputController")
@RequestMapping(value = "/application/processes/sgd_obtener_provincias_", method = RequestMethod.POST)
public class Obtener_provincias_CreateInputController extends AbstractProcessCreateController<Da_def_create_obtener_provincias__initiateDomain> {
    public Obtener_provincias_CreateInputController() {
        super("sgd_obtener_provincias_", Da_def_create_obtener_provincias__initiateDomain.class);
    }
}