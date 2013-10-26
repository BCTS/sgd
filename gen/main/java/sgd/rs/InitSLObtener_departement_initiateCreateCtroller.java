package sgd.rs;

import com.emc.xcp.services.process.rs.AbstractProcessDataSourceControllerMultiObjects;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Obtener_departement_initiateSLProcessInput;
import sgd.domain.Obtener_departement_initiateSLProcessOutput;


@Controller(value = "sgd.rs.InitSLObtener_departement_initiateCreateCtroller")
@RequestMapping(value = "/application/processes/sgd_obtener_departement_initiate", method = RequestMethod.GET)
public class InitSLObtener_departement_initiateCreateCtroller extends AbstractProcessDataSourceControllerMultiObjects<Obtener_departement_initiateSLProcessInput,Obtener_departement_initiateSLProcessOutput> {
    public InitSLObtener_departement_initiateCreateCtroller() {
        super("urn:sgd:com.emc.ide.artifact.process:Artifacts/Processes/obtener_departement.process", Obtener_departement_initiateSLProcessInput.class,Obtener_departement_initiateSLProcessOutput.class);
    }
}