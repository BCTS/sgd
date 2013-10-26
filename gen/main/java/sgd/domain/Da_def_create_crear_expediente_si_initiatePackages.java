package sgd.domain;

import com.emc.xcp.services.process.annotation.ProcessPackage;
import org.codehaus.jackson.annotate.JsonPropertyOrder;
import sgd.domain.Da_def_create_crear_expediente_si_initiateSgd_expediente_sisgedInput;


@JsonPropertyOrder(alphabetic = true)
public class Da_def_create_crear_expediente_si_initiatePackages {

    @ProcessPackage(name = "expediente")
    private Da_def_create_crear_expediente_si_initiateSgd_expediente_sisgedInput expediente;

    public Da_def_create_crear_expediente_si_initiateSgd_expediente_sisgedInput getExpediente(){
        return expediente;
    }

    public void setExpediente(Da_def_create_crear_expediente_si_initiateSgd_expediente_sisgedInput expediente){
        this.expediente = expediente;
    }

}