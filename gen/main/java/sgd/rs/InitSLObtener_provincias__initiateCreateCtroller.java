package sgd.rs;

import com.emc.xcp.services.process.rs.AbstractProcessDataSourceControllerMultiObjects;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import sgd.domain.Obtener_provincias__initiateSLProcessInput;
import sgd.domain.Obtener_provincias__initiateSLProcessOutput;


@Controller(value = "sgd.rs.InitSLObtener_provincias__initiateCreateCtroller")
@RequestMapping(value = "/application/processes/sgd_obtener_provincias__initiate", method = RequestMethod.GET)
public class InitSLObtener_provincias__initiateCreateCtroller extends AbstractProcessDataSourceControllerMultiObjects<Obtener_provincias__initiateSLProcessInput,Obtener_provincias__initiateSLProcessOutput> {
    public InitSLObtener_provincias__initiateCreateCtroller() {
        super("urn:sgd:com.emc.ide.artifact.process:Artifacts/Processes/obtener_provincias_.process", Obtener_provincias__initiateSLProcessInput.class,Obtener_provincias__initiateSLProcessOutput.class);
    }
}