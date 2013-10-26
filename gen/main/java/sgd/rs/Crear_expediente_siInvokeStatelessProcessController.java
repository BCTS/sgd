package sgd.rs;

import com.emc.xcp.services.process.rs.AbstractProcessDataActionController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Da_def_invoke_stateless_processcrear_expediente_si_initiateDomain;


@Controller(value = "sgd.rs.Crear_expediente_siInvokeStatelessProcessController")
@RequestMapping(value = "/application/processes/sgd_crear_expediente_si", method = RequestMethod.POST, params = "type=stateless")
public class Crear_expediente_siInvokeStatelessProcessController extends AbstractProcessDataActionController<Da_def_invoke_stateless_processcrear_expediente_si_initiateDomain> {
    public Crear_expediente_siInvokeStatelessProcessController() {
        super("urn:sgd:com.emc.ide.artifact.process:Artifacts/Processes/crear_expediente_si.process", Da_def_invoke_stateless_processcrear_expediente_si_initiateDomain.class);
    }
}