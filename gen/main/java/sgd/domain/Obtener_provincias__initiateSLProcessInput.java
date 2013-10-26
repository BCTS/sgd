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
@Linked(template = "/application/processes/sgd_obtener_provincias__initiate")
@JsonPropertyOrder(alphabetic = true)
public class Obtener_provincias__initiateSLProcessInput {

    @ProcessVariable(variableName = "id_departamento")
    private Integer id_departamento;

    public Integer getId_departamento(){
        return id_departamento;
    }

    public void setId_departamento(Integer id_departamento){
        this.id_departamento = id_departamento;
    }

    @JsonProperty
    public Map<String, java.lang.Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String,  java.lang.Object> linkSource){
    }
}