package sgd.domain;

import com.emc.xcp.persistence.annotation.PersistentAttribute;
import com.emc.xcp.persistence.annotation.PersistentId;
import com.emc.xcp.persistence.annotation.PersistentObject;
import com.emc.xcp.services.core.annotation.Linked;
import com.emc.xcp.services.framework.domain.LinkSource;
import java.util.Map;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonProperty;
import org.codehaus.jackson.annotate.JsonPropertyOrder;


@PersistentObject(type = "expediente_sisged")
@Linked(template = "/application/expediente_sisged")
@JsonPropertyOrder(alphabetic = true)
public class Expediente_sisgedView {

    @PersistentId
    @PersistentAttribute(name = "r_object_id")
    @Linked
    private String id;

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id = id;
    }

    @JsonProperty
    public Map<String, java.lang.Object> getLinks(){
        return LinkSource.getLinks(this);
    }

    @JsonIgnore
    public void setLinks(Map<String,  java.lang.Object> linkSource){
    }
}