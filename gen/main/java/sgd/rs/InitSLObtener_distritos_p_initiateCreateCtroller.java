package sgd.rs;

import com.emc.xcp.services.process.rs.AbstractProcessDataSourceControllerMultiObjects;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Obtener_distritos_p_initiateSLProcessInput;
import sgd.domain.Obtener_distritos_p_initiateSLProcessOutput;


@Controller(value = "sgd.rs.InitSLObtener_distritos_p_initiateCreateCtroller")
@RequestMapping(value = "/application/processes/sgd_obtener_distritos_p_initiate", method = RequestMethod.GET)
public class InitSLObtener_distritos_p_initiateCreateCtroller extends AbstractProcessDataSourceControllerMultiObjects<Obtener_distritos_p_initiateSLProcessInput,Obtener_distritos_p_initiateSLProcessOutput> {
    public InitSLObtener_distritos_p_initiateCreateCtroller() {
        super("urn:sgd:com.emc.ide.artifact.process:Artifacts/Processes/obtener_distritos_p.process", Obtener_distritos_p_initiateSLProcessInput.class,Obtener_distritos_p_initiateSLProcessOutput.class);
    }
}