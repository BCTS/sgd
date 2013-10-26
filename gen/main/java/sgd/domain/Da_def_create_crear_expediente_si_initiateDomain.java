package sgd.domain;

import com.emc.xcp.services.task.annotation.Packages;
import com.emc.xcp.services.task.annotation.ProcessVariables;
import org.codehaus.jackson.annotate.JsonPropertyOrder;
import sgd.domain.Da_def_create_crear_expediente_si_initiatePackages;
import sgd.domain.Da_def_create_crear_expediente_si_initiateProcessVariables;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_crear_expediente_si_initiateDomain extends com.emc.xcp.services.process.domain.InitiateProcessBaseDomain {

    @ProcessVariables
    private Da_def_create_crear_expediente_si_initiateProcessVariables processVariables;

    @Packages
    private Da_def_create_crear_expediente_si_initiatePackages processPackages;

    public Da_def_create_crear_expediente_si_initiateProcessVariables getProcessVariables(){
        return processVariables;
    }

    public void setProcessVariables(Da_def_create_crear_expediente_si_initiateProcessVariables processVariables){
        this.processVariables = processVariables;
    }

    public Da_def_create_crear_expediente_si_initiatePackages getProcessPackages(){
        return processPackages;
    }

    public void setProcessPackages(Da_def_create_crear_expediente_si_initiatePackages processPackages){
        this.processPackages = processPackages;
    }

}