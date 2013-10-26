package sgd.domain;

import com.emc.xcp.services.task.annotation.ProcessVariables;
import org.codehaus.jackson.annotate.JsonPropertyOrder;
import sgd.domain.Da_def_create_obtener_distritos_p_initiateProcessVariables;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_obtener_distritos_p_initiateDomain extends com.emc.xcp.services.process.domain.InitiateProcessBaseDomain {

    @ProcessVariables
    private Da_def_create_obtener_distritos_p_initiateProcessVariables processVariables;

    public Da_def_create_obtener_distritos_p_initiateProcessVariables getProcessVariables(){
        return processVariables;
    }

    public void setProcessVariables(Da_def_create_obtener_distritos_p_initiateProcessVariables processVariables){
        this.processVariables = processVariables;
    }

}