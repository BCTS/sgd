package sgd.domain;

import com.emc.xcp.persistence.annotation.PersistentObject;
import com.emc.xcp.services.core.annotation.Linked;
import com.emc.xcp.services.framework.domain.LinkSource;
import com.emc.xcp.services.process.annotation.ProcessVariable;
import java.util.Map;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@PersistentObject(superType = "", type = "dm_workflow")
@Linked(template = "/application/processes/sgd_obtener_distritos_p_initiate")
@JsonPropertyOrder(alphabetic = true)
public class Obtener_distritos_p_initiateSLProcessOutput {

    @ProcessVariable(variableName = "distrito")
    private String distrito;

    @ProcessVariable(variableName = "id_distrito")
    private Integer id_distrito;

    public String getDistrito(){
        return distrito;
    }

    public void setDistrito(String distrito){
        this.distrito = distrito;
    }

    public Integer getId_distrito(){
        return id_distrito;
    }

    public void setId_distrito(Integer id_distrito){
        this.id_distrito = id_distrito;
    }

    @JsonProperty
    public Map<String, java.lang.Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String,  java.lang.Object> linkSource){
    }
}